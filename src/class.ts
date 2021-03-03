abstract class Person {
  static species = "ホモ・サピエンス"
  static isAdult(age: number) {
    if (age > 17) return true
    return false
  }
  constructor(public name:string,protected age:number) {
  }
  incrementAge() {
    this.age += 1
  }

  greeting() {
    console.log(`I'm ${this.name},I am ${this.age} old`)
    //継承先のメソッドにアクセスしたい場合はabstractを使用すること。使用する場合にはクラスの宣言時にも書くこと
    this.explainJob()
  }
  abstract explainJob(): void 
}
//abstractを使用した場合、そのクラスからインスタンスを作成することは不可能。継承前提で書く。
//失敗例　const hoge = new Person


class Teacher extends Person{
  constructor(name:string,age:number,public _subject:string) {
    super(name, age)
    this.greeting()
  }
  explainJob() {
    console.log(`I'm teacher and I teach ${this._subject}`)
  }
  greeting() {
    console.log(`I'm ${this.name},I am ${this.age} old, I teach ${this._subject}.`)
  }

}
const teacher = new Teacher("sensei", 40, "English")
