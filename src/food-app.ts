class Score {}
class Food {
  constructor(public element: HTMLDivElement) {
    element.addEventListener('click', this.clickEventHandler.bind(this));
  }
  clickEventHandler() {
    this.element.classList.toggle('food--active');
  }
}
class Foods {
  elements = document.querySelectorAll<HTMLDivElement>('.food');
  private _activeElements: HTMLDivElement[] = []; //food--activeのものを入れる配列を用意
  get activeElements() {
    this._activeElements = [];
    this.elements.forEach((element) => {
      if (element.classList.contains('food--active')) {
        //food--activeのクラスを持つか判別するif文
        this._activeElements.push(element);
      }
    });
    return this._activeElements;
  }
  constructor() {
    this.elements.forEach((element) => {
      new Food(element);
    });
  }
}

const foods = new Foods();
