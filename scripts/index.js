// Открытие и закрытие попапов
const openPopup = (popup) => {
  popup.classList.add("popup_opened");
};

const closePopup = (popup) => {
  popup.classList.remove("popup_opened");
};
// popup редактирования профиля
const editProfileButton = document.querySelector(".profile__button");
const changePopup = document.querySelector(".popup");
const closeButtonProfile = changePopup.querySelector(".popup__close-icon");
const editProfileForm = changePopup.querySelector(".popup__form");
const nameInput = changePopup.querySelector(".popup__text_type_name");
const jobInput = changePopup.querySelector(".popup__text_type_job");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");

const openButtonProfilePopup = () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(changePopup);
};
editProfileButton.addEventListener("click", openButtonProfilePopup);

const closeButtonProfilePopup = () => {
  closePopup(changePopup);
};
closeButtonProfile.addEventListener("click", closeButtonProfilePopup);

editProfileForm.addEventListener("submit", (event) => {
  event.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(changePopup);
});

//Popup добавления карточек
const addButton = document.querySelector(".profile__add-button");
const addPopupOpen = document.querySelector(".popup__add");
const closeButtonAddCart = addPopupOpen.querySelector(".addclose");
const editAddForm = addPopupOpen.querySelector(".addform");

const openButtonAddPopup = () => {
  openPopup(addPopupOpen);
};
addButton.addEventListener("click", openButtonAddPopup);

const closeButtonAddPopup = () => {
  closePopup(addPopupOpen);
};
closeButtonAddCart.addEventListener("click", closeButtonAddPopup);

// Добавление клона карточки
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

const cardsTemplate = document.getElementById("cards-template");
const cardsContainer = document.querySelector(".elements");
const addCardsPopup = document.querySelector(".popup__add");
const addCardsBottom = document.querySelector(".button-add");
const addCardsForm = document.querySelector(".addform");

const createCardsElement = (cardsData) => {
  const cardsElement = cardsTemplate.content
    .querySelector(".element")
    .cloneNode(true);
  const cardsName = cardsElement.querySelector(".element__heading");
  const cardsImage = cardsElement.querySelector(".element__images");

  cardsName.innerHTML = cardsData.name;
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

  const nameAddImput = addCardsForm.querySelector(".popup__text_type_place");
  const linkAddImput = addCardsForm.querySelector(".popup__text_type_link");

  const name = nameAddImput.value;
  const link = linkAddImput.value;

  const initialCard = {
    name,
    link,
  };
  renderCardsElement(createCardsElement(initialCard));
};

addCardsForm.addEventListener("submit", handleAddCardsSubmit);

//Popup Зум-картинки
const imagePopupOpen = document.querySelector(".popup__image-zoom");
const cardsElement = cardsTemplate.content.querySelector(".element");
const cardsImage = cardsElement.querySelector(".element__images");

const openButtonImagePopup = () => {
  openPopup(imagePopupOpen);
};
cardsImage.addEventListener("click", openButtonImagePopup);
