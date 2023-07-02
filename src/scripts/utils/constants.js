const initialCards = [
  {
    place: "Звездное небо",
    link: "https://images.unsplash.com/photo-1680742376777-3f66cc33513b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
  },
  {
    place: "Дорога в лесу",
    link: "https://images.unsplash.com/photo-1680158239346-8d2eb947ac52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
  },
  {
    place: "Елка",
    link: "https://images.unsplash.com/photo-1679775912575-cfe09ff563b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80",
  },
  {
    place: "Лес",
    link: "https://images.unsplash.com/photo-1677485449555-5df4c23d6ea3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=369&q=80",
  },
  {
    place: "Шишка",
    link: "https://images.unsplash.com/photo-1659891169235-9fc4ed6d0f9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    place: "Олень",
    link: "https://images.unsplash.com/photo-1676579533885-61b1d0d8a094?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=394&q=80",
  },
];

const editProfileButton = document.querySelector(".profile__button");
const addButton = document.querySelector(".profile__add-button");
const avatarButton = document.querySelector(".profile__avatar-overlay");

const profilePopupSelector = ".popup_profile";
const addCardsSelector = ".popup_add";
const imagePopupSelector = ".popup_image-zoom";
const popupAvatarSelector = ".popup-avatar-edit";
const popupDeleteSelector = ".popup-delete";
const cardsContainer = ".elements";
const profileForm = document.querySelector(".profileForm");
const addForm = document.querySelector(".addform");
const avatarForm = document.querySelector(".avatarform");

const configInfo = {
  profileNameSelector: ".profile__title",
  profileJobSelector: ".profile__subtitle",
  profileAvatar: ".profile__avatar",
};

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-submit",
  inactiveButtonClass: "popup__button-submit_off",
  inputErrorClass: "popup__input_invalid",
  errorClass: "popup__input-error",
};

export {
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
};
