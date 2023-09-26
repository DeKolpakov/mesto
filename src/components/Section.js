export class Section {
  constructor({cardList, renderer}, template) {
    this._cardList = cardList;
    this._renderer = renderer;
    this._template = template;
  }

  rendererAllCard() {
    this._cardList.forEach((itemCard) => {
      //console.log(itemCard)
      this._renderer(itemCard);
    });
  }

  addItem(cardElement) {
    //console.log(cardElement)
    this._template.prepend(cardElement);
  }
}
