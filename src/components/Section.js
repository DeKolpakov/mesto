export class Section {
  constructor({item, renderer}, templateSelector) {
    this._rendererItem = item;
    this._renderer = renderer;
    this._template = document.querySelector(templateSelector);
  }

  rendererCards() {
    this._rendererItem.forEach((data) => {
      this._renderer(data);
    });
  }

  addCard(cardElement) {
    this._template.prepend(cardElement);
  }
}
