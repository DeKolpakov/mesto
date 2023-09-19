export class Section {
  constructor({items, renderer}, templateSelector){
    this._rendererItems = items
    this._renderer = renderer
    this._template = document.querySelector(templateSelector)
  }

  rendererCards() {
    this._rendererItems.forEach((item) => {
      this._renderer(item);
    });
  };

  addCard (cardElement) {  
    this._template.prepend(cardElement);
  };
  
}