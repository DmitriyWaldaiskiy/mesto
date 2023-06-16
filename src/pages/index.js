import "./index.css";
import Card from "../scripts/components/Card.js";
import FormValidator from "../scripts/components/FormValidator.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import Section from "../scripts/components/Section";
import UserInfo from "../scripts/components/UserInfo.js";

import {
  initialCards,
  openProfileButton,
  submitProfileForm,
  submitAddForm,
  openAddButton,
  validationConfig,
  configProfileInfo,
} from "../scripts/utils/constants.js";

const userInfo = new UserInfo(configProfileInfo);

const section = new Section(
  {
    items: initialCards,
    renderer: (element) => {
      const card = new Card(element, popupImage.open);
      return card.createCardElement();
    },
  },
  "elements"
);
section.addCard();

const popupImage = new PopupWithImage(".popup_image-zoom");

const popupProfile = new PopupWithForm(".popup_profile", (event) => {
  event.preventDefault();
  userInfo.setUserInfo(popupProfile.getInputValue());
  popupProfile.close();
});

const popupAddCard = new PopupWithForm(".popup_add", (event) => {
  event.preventDefault();
  section.addNewElement(section.renderer(popupAddCard.getInputValue()));
  popupAddCard.close();
});

const profileValidator = new FormValidator(validationConfig, submitProfileForm);
profileValidator.enableValidation();

const addValidator = new FormValidator(validationConfig, submitAddForm);
addValidator.enableValidation();

popupProfile.setEventListeners;
popupAddCard.setEventListeners;
popupImage.setEventListeners;

openProfileButton.addEventListener("click", () => {
  profileValidator.resetError();
  popupProfile.setInputValue(userInfo.getUserInfo());
  popupProfile.open();
});

openAddButton.addEventListener("click", () => {
  addValidator.resetError();
  popupAddCard.open();
});
