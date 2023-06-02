class Card {
  constructor(cardsData, openImage) {
    this._cardsData = cardsData;
    this._name = cardsData.name;
    this._link = cardsData.link;
    this._openImage = openImage;

    this._cardsElement = document
      .getElementById("cards-template")
      .content.querySelector(".element")
      .cloneNode(true);
  }

  _handleDelete = () => {
    this._cardsElement.remove();
  };

  _handleLike = () => {
    this._likeButton.classList.toggle("element__like_active");
  };

  _openImage = () => {
    this._openImage(this._cardsData);
  };

  _setEventListener = () => {
    this._deleteButton.addEventListener("click", this._handleDelete);
    this._likeButton.addEventListener("click", this._handleLike);
    this._cardsImage.addEventListener("click", this._openImage);
  };

  createCardsElement = () => {
    this._cardsImage = this._cardsElement.querySelector(".element__images");
    this._cardsName = this._cardsElement.querySelector(".element__heading");
    this._deleteButton = this._cardsElement.querySelector(
      ".element__button-delete"
    );
    this._likeButton = this._cardsElement.querySelector(".element__like");

    this._cardsImage.src = this._link;
    this._cardsImage.alt = this._name;
    this._cardsName.textContent = this._name;
    this._setEventListener();
    return this._cardsElement;
  };
}

export { Card };
