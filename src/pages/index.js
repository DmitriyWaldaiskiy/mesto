import "./index.css";
import {
  initialCards,
  editProfileButton,
  addButton,
  avatarButton,
  profilePopupSelector,
  addCardsSelector,
  imagePopupSelector,
  popupAvatarSelector,
  popupDeleteSelector,
  cardsContainer,
  profileForm,
  addForm,
  avatarForm,
  configInfo,
  validationConfig,
} from "../scripts/utils/constants.js";

import Card from "../scripts/components/Card.js";
import FormValidator from "../scripts/components/FormValidator.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import Section from "../scripts/components/Section.js";
import UserInfo from "../scripts/components/UserInfo.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupDeleteCard from "../scripts/components/PopupDeleteCard.js";
import Api from "../scripts/components/Api.js";

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-69",
  headers: {
    authorization: "35a16b25-9e84-4733-9ede-57421d5630ff",
    "Content-Type": "application/json",
  },
});

const userInfo = new UserInfo(configInfo);

const openImagePopup = new PopupWithImage(imagePopupSelector);

// submit удаления
const deleteCardPopup = new PopupDeleteCard(
  popupDeleteSelector,
  ({ card, cardId }) => {
    api
      .deleteCard(cardId)
      .then(() => {
        card.removeCard();
        deleteCardPopup.close();
      })
      .catch((error) => console.error(`Ошибка при удалении карточек ${error}`));
  }
);

function createNewCard(cardData) {
  const card = new Card(
    cardData,
    ".cards-template",
    openImagePopup.open,
    deleteCardPopup.open,
    (elementLike, cardId) => {
      if (elementLike.classList.contains("element__like_active")) {
        api
          .deleteLike(cardId)
          .then((res) => {
            card.toggleLikes(res.likes);
          })
          .catch((error) => console.error(`Ошибка при снятии лайков ${error}`));
      } else {
        api
          .addLike(cardId)
          .then((res) => {
            card.toggleLikes(res.likes);
          })
          .catch((error) =>
            console.error(`Ошибка при добавлении лайков ${error}`)
          );
      }
    }
  );
  return card.createCardElement();
}

const section = new Section((element) => {
  section.addItemAppend(createNewCard(element));
}, cardsContainer);

// popup редактирования профиля
editProfileButton.addEventListener("click", () => {
  popupProfile.setInputsValue(userInfo.getUserInfo());
  popupProfile.open();
});

//submit
const popupProfile = new PopupWithForm(profilePopupSelector, (data) => {
  api
    .setUserInfo(data)
    .then((res) => {
      userInfo.setUserInfo({
        username: res.name,
        job: res.about,
        avatar: res.avatar,
      });
      popupProfile.close();
    })
    .catch((error) => console.error(`Ошибка редактирования профиля ${error}`))
    .finally(() => popupProfile.setupTextDefault());
});

// popup popupAddcards
addButton.addEventListener("click", () => {
  addValidator.resetError();
  popupAddcards.open();
});

//submit popupAddcards
const popupAddcards = new PopupWithForm(addCardsSelector, (data) => {
  api
    .addCard(data)
    .then((cardData) => {
      cardData.myid = userInfo.getId();
      section.addItemPrepend(createNewCard(cardData));
      popupAddcards.close();
    })
    .catch((error) => console.error(`Ошибка редактирования профиля ${error}`))
    .finally(() => popupAddcards.setupTextDefault());
});

//Popup аватара
avatarButton.addEventListener("click", () => {
  avatarValidation.resetError();
  popupAvatarEdit.open();
});

//submit аватара
const popupAvatarEdit = new PopupWithForm(popupAvatarSelector, (data) => {
  api
    .setNewAvatar(data)
    .then((res) => {
      userInfo.setUserInfo({
        username: res.name,
        job: res.about,
        avatar: res.avatar,
      }),
        popupAvatarEdit.close();
    })
    .catch((error) => console.error(`Ошибка редактирования аватара ${error}`))
    .finally(() => popupAvatarEdit.setupTextDefault());
});

popupProfile.setEventListeners();
openImagePopup.setEventListeners();
popupAddcards.setEventListeners();
popupAvatarEdit.setEventListeners();
deleteCardPopup.setEventListeners();

const profileValidator = new FormValidator(validationConfig, profileForm);
profileValidator.enableValidation();

const addValidator = new FormValidator(validationConfig, addForm);
addValidator.enableValidation();

const avatarValidation = new FormValidator(validationConfig, avatarForm);
avatarValidation.enableValidation();

Promise.all([api.getProfileInfo(), api.getCards()])
  .then(([userData, cardData]) => {
    cardData.forEach((element) => (element.myid = userData._id));
    userInfo.setUserInfo({
      username: userData.name,
      job: userData.about,
      avatar: userData.avatar,
    });
    userInfo.setId(userData._id);
    section.addCards(cardData);
  })
  .catch((error) => console.error(`Ошибка редактирования профиля ${error}`));
