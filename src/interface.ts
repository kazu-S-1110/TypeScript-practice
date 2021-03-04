interface Human {
  name: string,
  age: number,
  //メソッドの書き方は二つ、下の方が見やすい
  // greeting:(message:string) => void
  greeting(message:string):void
}

const human: Human = {
  name: "peter",
  age: 20,
  greeting(message: string) {
    console.log(message)
  }
}

human.greeting("hi")