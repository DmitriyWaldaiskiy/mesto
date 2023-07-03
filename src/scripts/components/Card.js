export default class Card {
  constructor(
    cardData,
    templateSelector,
    openImagePopup,
    openDeletePopup,
    likeChange
  ) {
    // console.log(cardData);
    this._cardData = cardData;
    this._link = cardData.link;
    this._name = cardData.name;
    this._myId = cardData.myid;
    this._likes = cardData.likes;
    this._likesLength = cardData.likes.length;
    this._likeChange = likeChange;
    this._isLike = false;
    this._ownerId = cardData.owner._id;
    this._cardId = cardData._id;
    this._openImage = openImagePopup;
    this._openDeletePopup = openDeletePopup;
    this._cardElement = document
      .querySelector(templateSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    this._cardImage = this._cardElement.querySelector(".element__images");
    this._cardName = this._cardElement.querySelector(".element__heading");
    this._deleteButton = this._cardElement.querySelector(
      ".element__button-delete"
    );
    this._likeButton = this._cardElement.querySelector(".element__like");
    this._counter = this._cardElement.querySelector(".element__counter");
  }

  _handleDelete = () => {
    this._openDeletePopup({ card: this, cardId: this._cardId });
  };

  _handleLike = () => {
    this._likeChange(this._isLike, this._cardId);
  };

  _onOpenImage = () => {
    this._openImage(this._cardData);
  };

  _setEventListener = () => {
    this._deleteButton.addEventListener("click", this._handleDelete);
    this._likeButton.addEventListener("click", this._handleLike);
    this._cardImage.addEventListener("click", this._onOpenImage);
  };

  _setTrashButtonVisible() {
    this._myId === this._ownerId
      ? (this._deleteButton.style.display = "block")
      : (this._deleteButton.style.display = "none");
  }

  checkStatusLike() {
    this._likes.forEach((item) => {
      if (item._id === this._myId) {
        this._isLike = true;
        this._likeButton.classList.add("element__like_active");
        return;
      }
    });
    this._counter.textContent = this._likesLength;
  }

  toggleLikes(likes) {
    this._likeButton.classList.toggle("element__like_active");
    this._counter.textContent = likes.length;
    if (this._isLike) {
      this._isLike = false;
    } else {
      this._isLike = true;
    }
  }

  removeCard() {
    this._cardElement.remove();
  }

  createCardElement() {
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardName.textContent = this._name;
    this.checkStatusLike();
    this._setTrashButtonVisible();
    this._setEventListener();
    return this._cardElement;
  }
}
