(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var r=function(){function t(e,r){var n=e.itemCard,o=e.userId,i=e.openFullImage,u=e.deleteCard,a=e.likeCard;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._title=n.name,this._image=n.link,this._likes=n.likes,this._cardId=n._id,this._ownerId=n.owner._id,this._userId=o,this._openFullImage=i,this._deleteCard=u,this._likeCard=a,this._cardSelector=r,this._cardElement=this._getTemplate(),this._galeryPhoto=this._cardElement.querySelector(".galery__photo"),this._galeryTitle=this._cardElement.querySelector(".galery__title"),this._buttonLike=this._cardElement.querySelector(".galery__button-like"),this._totalLike=this._cardElement.querySelector("#total-like"),this._buttonDelete=this._cardElement.querySelector(".galery__button-delete")}var r,n;return r=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".galery__item").cloneNode(!0)}},{key:"_addLike",value:function(){this._buttonLike.classList.add("galery__button-like_active")}},{key:"_removeLike",value:function(){this._buttonLike.classList.remove("galery__button-like_active")}},{key:"isLiked",value:function(){if(this._likes)return!0}},{key:"setLikes",value:function(){}},{key:"removeCard",value:function(){this._cardElement.remove()}},{key:"_setEventListeners",value:function(){var t=this;this._cardElement.querySelector(".galery__button-delete").addEventListener("click",(function(){t._removeCard()})),this._cardElement.querySelector(".galery__button-like").addEventListener("click",this._toggleLike),this._galeryPhoto.addEventListener("click",(function(){t._openFullImage(t._image,t._title)}))}},{key:"createCard",value:function(){return this._galeryTitle.textContent=this._title,this._galeryTitle.alt=this._title,this._galeryPhoto.src=this._image,this._setEventListeners(),this._cardElement}}])&&e(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}();function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}var i={inputSelector:".popup__input",submitButtonSelector:".popup__button-save",inactiveButtonClass:"popup__button-save_invalid",activeButtonClass:"popup__button-save_valid",inputErrorClass:"popup__input_error",errorClass:"popup__input-span_error"},u=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._activeButtonClass=e.activeButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._form=r,this._inputsAll=Array.from(this._form.querySelectorAll(this._inputSelector)),this._submitButton=this._form.querySelector(this._submitButtonSelector)}var e,r;return e=t,(r=[{key:"_validationInput",value:function(t){this._inputError=this._form.querySelector("#".concat(t.id,"_error")),t.validity.valid?(t.classList.remove(this._inputErrorClass),this._inputError.classList.remove(this._errorClass),this._inputError.textContent=""):(t.classList.add(this._inputErrorClass),this._inputError.classList.add(this._errorClass),this._inputError.textContent=t.validationMessage)}},{key:"_enableSubmitButton",value:function(){this._submitButton.removeAttribute("disabled",""),this._submitButton.classList.add(this._activeButtonClass),this._submitButton.classList.remove(this._inactiveButtonClass)}},{key:"disableSubmitButton",value:function(){this._submitButton.setAttribute("disabled",!0),this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.classList.remove(this._activeButtonClass)}},{key:"_submitButtonState",value:function(){this._inputsAll.some((function(t){return!t.validity.valid}))?this.disableSubmitButton():this._enableSubmitButton()}},{key:"_setEventListeners",value:function(){var t=this;this._submitButtonState(),this._form.addEventListener("submit",(function(){t.disableSubmitButton()})),this._inputsAll.forEach((function(e){e.addEventListener("input",(function(){t._validationInput(e),t._submitButtonState()}))}))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(t){t.preventDefault()})),this._setEventListeners()}}])&&o(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==a(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===a(o)?o:String(o)),n)}var o}var l=function(){function t(e,r){var n=e.cardList,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._cardList=n,this._renderer=o,this._template=r}var e,r;return e=t,(r=[{key:"rendererAllCard",value:function(){var t=this;this._cardList.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(t){this._template.prepend(t)}}])&&c(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==s(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===s(o)?o:String(o)),n)}var o}var p=function(){function t(e,r,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameProfile=e,this._descriptionProfile=r,this.avatarProfile=n}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return{name:this._nameProfile.textContent,description:this._descriptionProfile.textContent}}},{key:"setUserInfo",value:function(t){this._nameProfile.textContent=t.name,this._descriptionProfile.textContent=t.description}},{key:"setUserAvatar",value:function(t){this.avatarProfile.src=t.avatarProfile}}])&&f(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function m(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==y(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===y(o)?o:String(o)),n)}var o}var h=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=e,this._handleEscClose=this._handleEscClose.bind(this)}var e,r;return e=t,(r=[{key:"openPopup",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("click",(function(e){e.target===e.currentTarget&&t.close()})),this._popup.addEventListener("click",(function(e){e.target.classList.contains("popup__button-close")&&t.close()}))}}])&&m(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function v(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==d(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===d(o)?o:String(o)),n)}var o}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=S(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},_.apply(this,arguments)}function b(t,e){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},b(t,e)}function S(t){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},S(t)}var g=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&b(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=S(n);if(o){var r=S(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===d(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupPhoto=e._popup.querySelector(".popup__photo-fullimage"),e._popupTitle=e._popup.querySelector(".popup__name-fullimage"),e}return e=u,(r=[{key:"openPopup",value:function(t){var e=t.name,r=t.link;_(S(u.prototype),"openPopup",this).call(this),this._popupPhoto.src=r,this._popupTitle.textContent=e,this._popupTitle.alt=e}}])&&v(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(h);function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function w(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==k(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==k(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===k(o)?o:String(o)),n)}var o}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=C(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},E.apply(this,arguments)}function P(t,e){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},P(t,e)}function C(t){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},C(t)}var L=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&P(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=C(n);if(o){var r=C(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===k(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var r,n=e.callbackSubmitForm;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,t))._callbackSubmitForm=n,r._formElement=r._popup.querySelector(".popup__form"),r._inputList=Array.from(r._formElement.querySelectorAll(".popup__input")),r}return e=u,(r=[{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"setEventListeners",value:function(){var t=this;E(C(u.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(e){e.preventDefault(),t._callbackSubmitForm(t._getInputValues()),t.close()}))}},{key:"close",value:function(){E(C(u.prototype),"close",this).call(this),this._formElement.reset()}}])&&w(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(h);function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function O(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==j(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==j(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===j(o)?o:String(o)),n)}var o}var q=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.baseUrl,this._headers=e.headers,this._checkResponse=function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}}var e,r;return e=t,(r=[{key:"getProfileInfo",value:function(){var t=this;return console.log(this._url),console.log(this._headers),fetch("".concat(this._url,"/user/me"),{headers:this._headers}).then((function(e){return t._checkResponse(e)}))}},{key:"editUserInfo",value:function(t){var e=this;return fetch("".concat(this._url,"/user/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.name,about:t.description})}).then((function(t){return e._checkResponse(t)}))}},{key:"editAvatar",value:function(t){var e=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t.avatar})}).then((function(t){return e._checkResponse(t)}))}},{key:"getCards",value:function(){var t=this;return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then((function(e){return t._checkResponse(e)}))}},{key:"postCard",value:function(t){var e=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t.name,link:t.link})}).then((function(t){return e._checkResponse(t)}))}},{key:"putLike",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers}).then((function(t){return e._checkResponse(t)}))}},{key:"deleteLike",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then((function(t){return e._checkResponse(t)}))}},{key:"deleteCard",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then((function(t){return e._checkResponse(t)}))}}])&&O(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),T=document.querySelector(".profile__name"),B=document.querySelector(".profile__description"),R=document.querySelector(".profile__button-open"),I=document.querySelector(".popup_type_profile"),A=document.querySelector("#profile-form"),x=(document.querySelector(".popup__button-close_type_profile"),document.querySelector("#profile-name")),F=document.querySelector("#profile-description"),U=document.querySelector(".popup_type_addimage"),D=document.querySelector("#addimage-form"),V=document.querySelector(".profile__button-add"),N=(document.querySelector(".popup__button-close_type_add"),document.querySelector("#image-name"),document.querySelector("#image-link"),document.querySelector(".galery")),J=document.querySelector(".popup_type_fullimage"),H=(document.querySelector(".popup__button-close_type_fullimage"),document.querySelector(".popup__name-fullimage"),document.querySelector(".popup__photo-fullimage"),document.querySelector(".popup_type_avatar")),z=(document.querySelector(".popup_type_delete"),new q({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-76",headers:{authorization:"29f12257-2630-4f2f-9515-6ae5f2ed2223","Content-Type":"application/json"}})),M=new L(I,{callbackSubmitForm:function(t){W.setUserInfo(t),z.editUserInfo({name:t.nameOutputProfile,description:t.nameOutputProfile}).then((function(t){avatarProfile.src=t.avatar,I.close()})).catch((function(t){console.log("Ошибка: ".concat(t))}))}}),G=new L(U,{callbackSubmitForm:function(t){z.postCard({name:t.name,link:t.link}).then((function(t){Y.addItem(X({likes:t.likes,cardId:t._id,name:t.name,link:t.link,owner:t.owner})),U.close()})).catch((function(t){console.log("Ошибка: ".concat(t))}))}}),K=new L(H,{callbackSubmitForm:function(t){z.editAvatar(t.avatar).then((function(t){avatarProfile.src=t.avatar,H.close()})).catch((function(t){console.log("Ошибка: ".concat(t))}))}}),Q=new g(J),W=new p(T,B),X=function(t){var e=new r({itemCard:t,userId:void 0,openFullImage:function(){Q.openPopup(t)},deleteCard:function(){deleteCardPopup.openPopup()},likeCard:function(t){e.isLiked()?z.deleteLike(t).then((function(t){e.setLike(t.likes)})).catch((function(t){console.log("Ошибка: ".concat(t))})):z.putLike(t).then((function(t){e.setLike(t.likes)})).catch((function(t){console.log("Ошибка: ".concat(t))}))}},".template__galery-item");return e.createCard()},Y=new l({cardList:[],renderer:function(t){Y.addItem(X({likes:t.likes,cardId:t._id,name:t.name,link:t.link,owner:t.owner}))}},N);Y.rendererAllCard();var Z=new u(i,A),$=new u(i,D);$.enableValidation(),Z.enableValidation(),M.setEventListeners(),G.setEventListeners(),Q.setEventListeners(),K.setEventListeners(),R.addEventListener("click",(function(){var t=W.getUserInfo(e,r),e=t.name,r=t.description;M.openPopup(),x.value=e,F.value=r})),V.addEventListener("click",(function(){G.openPopup(),$.disableSubmitButton()}))})();
//# sourceMappingURL=index.js.map