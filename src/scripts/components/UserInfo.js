export default class UserInfo {
  constructor(configInfo) {
    this._profileName = document.querySelector(configInfo.profileNameSelector);
    this._profileJob = document.querySelector(configInfo.profileJobSelector);
  }

  getUserInfo() {
    return {
      username: this._profileName.textContent,
      job: this._profileJob.textContent,
    };
  }

  setUserInfo(userData) {
    this._profileName.textContent = userData.username;
    this._profileJob.textContent = userData.job;
  }
}
