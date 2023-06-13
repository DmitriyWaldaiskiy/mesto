const initialCards = [
  {
    name: "Звездное небо",
    link: "https://images.unsplash.com/photo-1680742376777-3f66cc33513b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
  },
  {
    name: "Дорога в лесу",
    link: "https://images.unsplash.com/photo-1680158239346-8d2eb947ac52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
  },
  {
    name: "Елка",
    link: "https://images.unsplash.com/photo-1679775912575-cfe09ff563b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80",
  },
  {
    name: "Лес",
    link: "https://images.unsplash.com/photo-1677485449555-5df4c23d6ea3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=369&q=80",
  },
  {
    name: "Шишка",
    link: "https://images.unsplash.com/photo-1659891169235-9fc4ed6d0f9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    name: "Олень",
    link: "https://images.unsplash.com/photo-1676579533885-61b1d0d8a094?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=394&q=80",
  },
];

const openProfileButton = document.querySelector(".profile__button");
const submitProfileForm = forms["profile-form"];
const openAddButton = document.querySelector(".button-add");
const submitAddForm = forms["add-form"];

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-submit",
  inactiveButtonClass: "popup__button-submit_off",
  inputErrorClass: "popup__input_invalid",
  errorClass: "popup__input-error",
};

const configProfileInfo = {
  profileNameItem: ".profile__title",
  profileJobItem: ".profile__subtitle",
};

export {
  initialCards,
  openProfileButton,
  submitProfileForm,
  submitAddForm,
  openAddButton,
  validationConfig,
  configProfileInfo,
};
