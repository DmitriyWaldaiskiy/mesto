export default class Card {
  constructor(cardData, templateSelector, openImagePopup) {
    this._cardData = cardData;
    this._openImage = openImagePopup;
    this._cardElement = document
      .querySelector(templateSelector)
      .content.querySelector(".element")
      .cloneNode(true);
  }

  _handleDelete = () => {
    this._cardElement.remove();
  };

  _handleLike = () => {
    this._likeButton.classList.toggle("element__like_active");
  };

  _onOpenImage = () => {
    this._openImage(this._cardData);
  };

  _setEventListener = () => {
    this._deleteButton.addEventListener("click", this._handleDelete);
    this._likeButton.addEventListener("click", this._handleLike);
    this._cardImage.addEventListener("click", this._onOpenImage);
  };

  createCardElement = () => {
    this._cardImage = this._cardElement.querySelector(".element__images");
    this._cardName = this._cardElement.querySelector(".element__heading");
    this._deleteButton = this._cardElement.querySelector(
      ".element__button-delete"
    );
    this._likeButton = this._cardElement.querySelector(".element__like");

    this._cardImage.src = this._cardData.link;
    this._cardImage.alt = this._cardData.place;
    this._cardName.textContent = this._cardData.place;
    this._setEventListener();
    return this._cardElement;
  };
}
