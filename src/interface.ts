interface Human {
  name: string,
  age: number,
  greeting(message:string):void
}

class Developer implements Human {
  constructor(
    public name: string,
    public age: number,
    public experience: number) {
    }
  greeting(message:string) {
    console.log(message)
  }  
}
// 構造的部分型
// 型注釈以上の代入をすることは可能、言い換えれば型注釈で宣言されたものは持っている。
const user: Human = new Developer("Jack", 20, 3)
// user.experience ⇦エラーを吐く
