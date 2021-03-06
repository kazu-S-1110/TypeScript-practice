type addFunc = (num1: number, num2: number) => number
let sumFunc: addFunc
sumFunc = (n1:number,n2:number) => n1 + n2

// オプショナルプロパティとオプショナルパラメータの記述方法（typeでもinterfaceでも記述可能）
interface Namable {
  name? : string
  nickname?: string //?をつけるだけ,あってもなくてもいいプロパティ
  sayHello?(message?:string):void //メソッドにも？を記述可能
}

const namable: Namable  ={
  name:"Jack"
}

interface Human extends Namable {
  age: number,
  greeting(message:string):void
}

class Developer implements Human, Namable {
  //初期化時のnameをオプショナルにする記述
  name?:string
  constructor(
    public age: number,
    public experience: number,
    initName? :string //もっと簡単にpublic name?:stringと書くことも可能　
  ) {
    if (initName) {
      this.name = initName
    }
    }
  greeting(message:string= "hello") {　//パラメータの初期値の書き方
    console.log(message)
  }  
}
const user = new Developer(20, 3)
const user2 = new Developer(23, 1, "hoge")


