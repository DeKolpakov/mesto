export class UserInfo {
  constructor(nameOutputProfile, descriptionOutputProfile) {
    this._nameProfile = nameOutputProfile;
    this._descriptionProfile = descriptionOutputProfile;
  }

  getUserInfo() {
    return {
      name: this._nameProfile.textContent,
      description: this._descriptionProfile.textContent,
    };
  }

  setUserInfo(formData) {
    this._nameProfile.textContent = formData.name;
    this._descriptionProfile.textContent = formData.description;
  }
}
