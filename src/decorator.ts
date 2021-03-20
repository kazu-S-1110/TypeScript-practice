//戻り値にクラスを指定して新しいクラスを作成する方法

function Logging() {　
  console.log("１、Logging Factory")
  return function Logging(constructor: Function) { 
    console.log("２、Logging...")
  }
}

function Component(template: string, selector: string) {
  console.log("Component Factory")
  return function <T extends {new(...args:any[]):{name:string}}>(constructor: T) { //最低限継承するものにextendsで指定する
    return class extends constructor { //受け取るコンストラクターを指定するがパラメータが限られてしまうため、ジェネリクスを使用する
      constructor(...args:any[]) {
        super(...args)
        console.log("Component")
        const mountedElement = document.querySelector(selector)
        const instance = new constructor 
        if (mountedElement) {
          mountedElement.innerHTML = template
          mountedElement.querySelector("h1")!.textContent = instance.name
        }
      }
    }
  }
}

// @Logging()
@Component("<h1>{{name}}</h1>","#app")//index.htmlにある#appにh1タグを埋め込むよう作成してみる
class User {
  name = "yaoooooo"
  constructor(public age:number) {
    console.log("User was created!")
  }
}

const user1 = new User(32)
const user2 = new User(34)


