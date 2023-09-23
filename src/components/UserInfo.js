export class UserInfo {
  constructor({nameSelector, descriptionSelector}) {
    this._nameProfile = document.querySelector(nameSelector);
    this._descriptionProfile = document.querySelector(descriptionSelector);
  }

  getUserInfo() {
    return {
      name: this._nameProfile.textContent,
      description: this._descriptionProfile.textContent,
    };
  }

  setUserInfo({name, description}) {
    (this._nameProfile.textContent = name), 
    (this._descriptionProfile.textContent = description);
  }
}
