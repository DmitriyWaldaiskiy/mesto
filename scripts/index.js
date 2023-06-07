import { initialCards } from "./initialcards.js";
import { Card } from "./card.js";
import { FormValidator } from "./FormValidator.js";

// находим все крестики проекта по универсальному селектору
const closeButtons = document.querySelectorAll(".popup__close-icon");
// popup редактирования профиля
const editProfileButton = document.querySelector(".profile__button");
const profilePopup = document.querySelector(".popup_profile");
const editProfileForm = profilePopup.querySelector(".popup__form");
const nameInput = profilePopup.querySelector(".popup__input_type_name");
const jobInput = profilePopup.querySelector(".popup__input_type_job");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");
//Popup добавления карточек
const addButton = document.querySelector(".profile__add-button");
const addPopupOpen = document.querySelector(".popup_add");
const editAddForm = addPopupOpen.querySelector(".addform");
// Добавление клона карточки
const cardsContainer = document.querySelector(".elements");
const addCardsPopup = document.querySelector(".popup_add");
const addCardsBottom = document.querySelector(".button-add");
const addCardsForm = document.querySelector(".addform");

const nameAddImput = addCardsForm.querySelector(".popup__input_type_place");
const linkAddImput = addCardsForm.querySelector(".popup__input_type_link");
//Popup Зум-картинки
const imagePopupOpen = document.querySelector(".popup_image-zoom");
const imageOpen = document.querySelector(".popup__image");
const imageCaption = document.querySelector(".popup__caption-image");

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-submit",
  inactiveButtonClass: "popup__button-submit_off",
  inputErrorClass: "popup__input_invalid",
  errorClass: "popup__input-error",
};

// Открытие и закрытие попапов
const openPopup = (popup) => {
  document.addEventListener("keydown", handleEsc);
  popup.classList.add("popup_opened");
};

const closePopup = (popup) => {
  document.removeEventListener("keydown", handleEsc);
  popup.classList.remove("popup_opened");
};

//закрытие по Esc
function handleEsc(evt) {
  if (evt.key === "Escape") {
    const openPopup = document.querySelector(".popup_opened");
    closePopup(openPopup);
  }
}

//закрытие по оверлею
function handleOverlay(evt, popup) {
  if (evt.target.classList.contains("popup_opened")) {
    closePopup(popup);
  }
}
profilePopup.addEventListener("mousedown", (evt) =>
  handleOverlay(evt, profilePopup)
);

addCardsPopup.addEventListener("mousedown", (evt) =>
  handleOverlay(evt, addCardsPopup)
);
imagePopupOpen.addEventListener("mousedown", (evt) =>
  handleOverlay(evt, imagePopupOpen)
);

//закрытие по крестику общее
closeButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
});

// popup редактирования профиля
const openProfilePopup = () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(profilePopup);
  deactivateButton(openProfilePopup);
};
editProfileButton.addEventListener("click", openProfilePopup);

editProfileForm.addEventListener("submit", (event) => {
  event.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(profilePopup);
});

const openButtonAddPopup = () => {
  openPopup(addPopupOpen);
};
addButton.addEventListener("click", openButtonAddPopup);

const openImage = (cardData) => {
  imageOpen.src = cardData.link;
  imageOpen.alt = cardData.name;
  imageCaption.textContent = cardData.name;
  openPopup(imagePopupOpen);
};

const renderCardElement = (cardData) => {
  const card = new Card(cardData, ".cards-template", openImage);
  const cards = card.createCardElement();
  return cards;
};

initialCards.forEach((element, openImage) => {
  cardsContainer.prepend(renderCardElement(element));
});

const handleAddCardsSubmit = (event) => {
  event.preventDefault();
  const cardsAdd = {
    name: nameAddImput.value,
    link: linkAddImput.value,
  };

  cardsContainer.prepend(renderCardElement(cardsAdd));
  addCardsForm.reset();
  closePopup(addPopupOpen);
  deactivateButton(handleAddCardsSubmit);
};
addCardsForm.addEventListener("submit", handleAddCardsSubmit);

const profileValidator = new FormValidator(validationConfig, editProfileForm);
profileValidator._enableValidation();

const addValidator = new FormValidator(validationConfig, editAddForm);
addValidator._enableValidation();
