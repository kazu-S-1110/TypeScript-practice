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
    this.explainJob()
  }
  abstract explainJob(): void 
}


class Teacher extends Person{
  // contstructorにprivateをつけると(newで)インスタンスを作ることができなくなる。（シングルトンパターン)
  // ->クラスからインスタンスを一つしか作れなくする,作る際はクラスの宣言内で作る。
  constructor(name: string, age: number, public _subject: string) {
    super(name, age)
    this.greeting()
  }
  // staticで内部からのみアクセスできるプロパティを定義
  private static instance:Teacher;
  // 呼び出しにはstaticを併用してインスタンスを生成する
  static getInstance() {
    if (Teacher.instance) return Teacher.instance //この記述で1回だけしかインスタンスを作れないようにする
    Teacher.instance = new Teacher("sense", 30, "programming")
    return Teacher.instance
  }
  
  explainJob() {
    console.log(`I'm teacher and I teach ${this._subject}`)
  }
  greeting() {
    console.log(`I'm ${this.name},I am ${this.age} old, I teach ${this._subject}.`)
  }

}
const teacher = new Teacher("sensei", 40, "English")

const teacher2 = Teacher.getInstance()
const teacher3 = Teacher.getInstance()
console.log({ teacher2, teacher3 })//同じものが入ってる。
