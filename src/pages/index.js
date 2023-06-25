import "./index.css";
import {
  initialCards,
  editProfileButton,
  addButton,
  profilePopupSelector,
  addCardsSelector,
  imagePopupSelector,
  cardsContainer,
  profileForm,
  addForm,
  configInfo,
  validationConfig,
} from "../scripts/utils/constants.js";

import Card from "../scripts/components/Card.js";
import FormValidator from "../scripts/components/FormValidator.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import Section from "../scripts/components/Section.js";
import UserInfo from "../scripts/components/UserInfo.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";

const userInfo = new UserInfo(configInfo);

const openImagePopup = new PopupWithImage(imagePopupSelector);

const section = new Section(
  {
    items: initialCards,
    renderer: (cardData) => {
      const card = new Card(cardData, ".cards-template", openImagePopup.open);
      return card.createCardElement();
    },
  },
  cardsContainer
);

// popup редактирования профиля
const popupProfile = new PopupWithForm(profilePopupSelector, (data) => {
  userInfo.setUserInfo(data);
});

//submit
editProfileButton.addEventListener("click", () => {
  popupProfile.setInputsValue(userInfo.getUserInfo());
  popupProfile.open();
});

//submit добавление карточек
const popupAddcards = new PopupWithForm(addCardsSelector, (data) => {
  section.addItem(data);
});

// popup добавление карточек
addButton.addEventListener("click", () => {
  addValidator.resetError();
  popupAddcards.open();
});

popupProfile.setEventListeners();
openImagePopup.setEventListeners();
popupAddcards.setEventListeners();
section.addCards();

const profileValidator = new FormValidator(validationConfig, profileForm);
profileValidator.enableValidation();

const addValidator = new FormValidator(validationConfig, addForm);
addValidator.enableValidation();
