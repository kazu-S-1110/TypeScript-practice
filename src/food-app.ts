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
  private _activeElementsScore: number[] = [];  //activeElementsから数字を抽出するnumber型の配列を用意
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
  get activeElementsScore() {
    this._activeElementsScore = []
    this._activeElements.forEach(element => {
      const foodScore = element.querySelector(".food__score")
      if (foodScore) {
        this._activeElementsScore.push(Number(foodScore.textContent)) //Scoreの配列はnumber型なのでnumber型に変換する
      }
    })
    return this._activeElementsScore
  }
  constructor() {
    this.elements.forEach((element) => {
      new Food(element);
    });
  }
}

const foods = new Foods();
