// interfaceの継承（extends）の方法
interface Namable {
  name :string
}
//extendsで繋げていくだけ、複数指定が可能（クラスは一つだけ）継承元がtypeでも可能　
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

