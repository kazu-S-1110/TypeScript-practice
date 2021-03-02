class Person {
  constructor(public name:string,protected age:number) {
  }
  greeting() {
    console.log(`I'm ${this.name},I am ${this.age} old`)
  }
}

const hoge = new Person("hoge",20);
hoge.greeting()

class Teacher extends Person{
  // もし初期化時点でプロパティを追加したいなら以下を書く必要がある
  constructor(name:string,age:number,public subject:string) {
    super(name,age)
  }
  // メソッドの上書きがしたい場合は、書くしかない。
  greeting() {
    console.log(`I'm ${this.name},I am ${this.age} old, I teach ${this.subject}.`)
  }

}
const teacher = new Teacher("sensei", 40,"English")
teacher.greeting()