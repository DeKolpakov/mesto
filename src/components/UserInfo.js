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

  setUserInfo(name, description) {
    //console.log(name)
    //console.log(description)
    this._nameProfile.textContent = name.value;
    this._descriptionProfile.textContent = description.value;
  }
}
