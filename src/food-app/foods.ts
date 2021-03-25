class Foods implements Foodsable {
  private static instance: Foods;
  elements = document.querySelectorAll<HTMLDivElement>('.food');
  private _activeElements: HTMLDivElement[] = []; //food--activeのものを入れる配列を用意
  private _activeElementsScore: number[] = []; //activeElementsから数字を抽出するnumber型の配列を用意
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
    this._activeElementsScore = [];
    this.activeElements.forEach((element) => {
      const foodScore = element.querySelector('.food__score');
      if (foodScore) {
        this._activeElementsScore.push(Number(foodScore.textContent)); //Scoreの配列はnumber型なのでnumber型に変換する
      }
    });
    return this._activeElementsScore;
  }
  private constructor() {
    this.elements.forEach((element) => {
      new Food(element);
    });
  }
  //インスタンスがたくさん作られてしまうのでシングルトンパターンを使用してメモリの節約をする。
  static getInstance() {
    if (!Foods.instance) {
      Foods.instance = new Foods();
    }
    return Foods.instance;
  }
}
