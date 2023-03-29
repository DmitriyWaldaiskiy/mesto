const openButton = document.querySelector(".profile__button");
const changePopup = document.querySelector(".popup");
const closeButton = changePopup.querySelector(".popup__close-icon");
const editPopupForm = changePopup.querySelector(".popup__form");
const nameInput = changePopup.querySelector(".popup__text_type_name");
const jobInput = changePopup.querySelector(".popup__text_type_job");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");

openButton.addEventListener("click", () => {
  changePopup.classList.add("popup_open");
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

closeButton.addEventListener("click", () => {
  changePopup.classList.remove("popup_open");
});

editPopupForm.addEventListener("submit", (event) => {
  evt.preventDefault();
  const name = nameInput.value;
  const job = jobInput.value;

  nameInput.textContent = name;
  jobInput.textContent = job;
  changePopup.classList.remove("popup_open");
});
