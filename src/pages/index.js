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

const popupImage = new PopupWithImage(imagePopupSelector);

const section = new Section(
  {
    items: initialCards,
    renderer: (cardData) => {
      const card = new Card(cardData, ".cards-template", popupImage.open);
      return card.createCardElement();
    },
  },
  cardsContainer
);

// popup редактирования профиля
const popupProfile = new PopupWithForm(profilePopupSelector, (evt) => {
  evt.preventDefault();
  userInfo.setUserInfo(popupProfile);
  popupProfile.close();
});

//submit
editProfileButton.addEventListener("click", () => {
  popupProfile.setInputsValue(userInfo.getUserInfo());
  popupProfile.open();
});

// popup добавление карточек

const popupAddcards = new PopupWithForm(addCardsSelector, (evt) => {
  evt.preventDefault();
  section.addItem(section.renderer(popupAddcards.getInputsValue()));
  popupAddcards.close();
});

//submit
addButton.addEventListener("click", () => {
  popupAddcards.open();
});

popupProfile.setEventListeners();
popupImage.setEventListeners();
popupAddcards.setEventListeners();
section.addCards();

const profileValidator = new FormValidator(validationConfig, profileForm);
profileValidator.enableValidation();

const addValidator = new FormValidator(validationConfig, addForm);
addValidator.enableValidation();
