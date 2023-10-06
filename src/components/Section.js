export class Section {
  constructor({renderer}, template) {
    //this._cardList = cardList;
    this._renderer = renderer;
    this._template = template;
  }

  rendererAllCard(cardData) {
    cardData.forEach((itemCard) => {
      this._renderer(itemCard);
    });
  }

  addItem(cardElement) {
    this._template.prepend(cardElement);
  }

  addAllItems(cardElement) {
    this._template.append(cardElement);
  }
}
