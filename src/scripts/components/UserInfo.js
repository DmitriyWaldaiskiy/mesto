export default class UserInfo {
  constructor(configInfo) {
    this._profileName = document.querySelector(configInfo.profileNameSelector);
    this._profileJob = document.querySelector(configInfo.profileJobSelector);
    this._profileAvatar = document.querySelector(configInfo.profileAvatar);
  }

  getUserInfo() {
    return {
      username: this._profileName.textContent,
      job: this._profileJob.textContent,
      avatar: this._profileAvatar.src,
    };
  }

  setUserInfo({ username, job, avatar }) {
    this._profileName.textContent = username;
    this._profileJob.textContent = job;
    this._profileAvatar.src = avatar;
  }
}
