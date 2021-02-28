class Person {
  firstname: string
  lastname: string
  constructor(firstname:string,lastname:string) {
    this.firstname = firstname
    this.lastname = lastname

  }
  greeting() {
    console.log(`I'm ${this.firstname},${this.lastname}`)
  }
}

const hogehoge = new Person("hoge","sage");
hogehoge.greeting()

const anotherPerson = {
  firstname: "fuga",
  lastname:"hige",
  anotherGreeting:hogehoge.greeting
}
anotherPerson.anotherGreeting()