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
const cardsTemplate = document.getElementById("cards-template");
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

const createCardsElement = (cardsData) => {
  const cardsElement = cardsTemplate.content
    .querySelector(".element")
    .cloneNode(true);
  const cardsName = cardsElement.querySelector(".element__heading");
  const cardsImage = cardsElement.querySelector(".element__images");

  cardsName.textContent = cardsData.name;
  cardsImage.src = cardsData.link;
  cardsImage.alt = cardsData.name;

  const deleteButton = cardsElement.querySelector(".element__button-delete");
  const likeButton = cardsElement.querySelector(".element__like");

  const handleDelete = () => {
    cardsElement.remove();
  };

  const handleLike = () => {
    likeButton.classList.toggle("element__like_active");
  };

  deleteButton.addEventListener("click", handleDelete);
  likeButton.addEventListener("click", handleLike);

  //Popup Зум-картинки
  const openImagePopup = () => {
    imageOpen.src = cardsData.link;
    imageOpen.alt = cardsData.name;
    imageCaption.textContent = cardsData.name;
    openPopup(imagePopupOpen);
  };
  cardsImage.addEventListener("click", openImagePopup);

  return cardsElement;
};

const renderCardsElement = (cardsElement) => {
  cardsContainer.prepend(cardsElement);
};

initialCards.forEach((cards) => {
  renderCardsElement(createCardsElement(cards));
});

const handleAddCardsSubmit = (event) => {
  event.preventDefault();

  const name = nameAddImput.value;
  const link = linkAddImput.value;

  const initialCard = {
    name,
    link,
  };
  renderCardsElement(createCardsElement(initialCard));
  addCardsForm.reset();
  closePopup(addPopupOpen);
};

addCardsForm.addEventListener("submit", handleAddCardsSubmit);
