class Card {
  constructor(cardData, openImage) {
    this._cardData = cardData;
    this._name = cardData.name;
    this._link = cardData.link;
    this._openImage = openImage;

    this._cardElement = document
      .querySelector(".cards-template")
      .content.querySelector(".element")
      .cloneNode(true);
  }

  _handleDelete = () => {
    this._cardElement.remove();
  };

  _handleLike = () => {
    this._likeButton.classList.toggle("element__like_active");
  };

  _openImage = () => {
    this._openImage(this._cardData);
  };

  _setEventListener = () => {
    this._deleteButton.addEventListener("click", this._handleDelete);
    this._likeButton.addEventListener("click", this._handleLike);
    this._cardImage.addEventListener("click", this._openImage);
  };

  createCardElement = () => {
    this._cardImage = this._cardElement.querySelector(".element__images");
    this._cardName = this._cardElement.querySelector(".element__heading");
    this._deleteButton = this._cardElement.querySelector(
      ".element__button-delete"
    );
    this._likeButton = this._cardElement.querySelector(".element__like");

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardName.textContent = this._name;
    this._setEventListener();
    return this._cardElement;
  };
}

export { Card };
