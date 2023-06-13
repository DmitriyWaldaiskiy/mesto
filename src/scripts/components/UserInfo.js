export default class UserInfo {
  constructor(config) {
    this._profileName = document.querySelector(config.profileNameItem);
    this._profileJob = document.querySelector(config.profileJobItem);
  }

  getUserInfo() {
    return {
      name: this._profileName.textContent,
      job: this._profileJob.textContent,
    };
  }

  setUserInfo(configNewInfo) {
    this._profileName.textContent = configNewInfo.name;
    this._profileJob.textContent = configNewInfo.job;
  }
}
