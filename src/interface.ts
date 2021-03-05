interface Human {
  // interfaceで定義している型にreadonlyをつけることが可能、直接的な変更を無効にする
  readonly name: string,
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
const user: Human = new Developer("Jack", 20, 3)
// user.name = "Sparrow" readonlyなため無効な記述
// しかし、implementsで指定したクラス内でpublicにしていた場合は変更が可能（上書きされる）
const dever = new Developer("hoge", 30, 1)
dever.name = "fuga" //可能な記述（publicで上書きしているため）

