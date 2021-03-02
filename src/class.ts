class Person {
  constructor(public name:string,private age:number) {
  }
  greeting() {
    console.log(`I'm ${this.name},I am ${this.age} old`)
  }
}

const hoge = new Person("hoge",20);
hoge.greeting()

