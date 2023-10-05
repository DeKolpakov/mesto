export class UserInfo {
  constructor(nameOutputProfile, descriptionOutputProfile, avatarProfile) {
    this._nameProfile = nameOutputProfile;
    this._descriptionProfile = descriptionOutputProfile;
    this._avatarProfile = avatarProfile;
  }

  getUserInfo() {
    return {
      name: this._nameProfile.textContent,
      description: this._descriptionProfile.textContent,
    };
  }

  setUserInfo(userData) {
    this._nameProfile.textContent = userData.name;
    this._descriptionProfile.textContent = userData.description;
  }

  setUserAvatar(data) {
    //console.log("!!!", data)
    //console.log(this._avatarProfile)
    this._avatarProfile.src = data.avatar;
  }
}
