// 復習・タイプでの関数の型の記述
type addFunc = (num1: number, num2: number) => number
let sumFunc: addFunc
sumFunc = (n1:number,n2:number) => n1 + n2

//　インターフェイスで関数の型を表現する
interface addFuncInter {
  (num1: number, num2: number): number //無名関数みたいな表記
  //一見するとオブジェクトと混同しやすいので関数の場合はtypeで書いた方がいい
}


interface Namable {
  name :string
}
interface Human extends Namable {
  age: number,
  greeting(message:string):void
}

class Developer implements Human,Namable {
  constructor(
    public name: string,
    public age: number,
    public experience: number) {
    }
  greeting(message:string) {
    console.log(message)
  }  
}
const user = new Developer("Jack", 20, 3)

