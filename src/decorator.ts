//デコレーターを使ってフレームワークのようなものを作成してみる

function Logging(message:string) {　
  return function Logging(constructor: Function) { 
    console.log("Logging...")
    console.log(message)
    console.log(constructor)
  }
  
}

function Component(template:string,selector:string) {
  return function (constructor: { new(...args:any[]): {name:string}}) { //２、new()によりクラスであることを伝える、コンストラクターに引数を持たせるにはnew()のなかにスプレッド構文を用いる
    const mountedElement = document.querySelector(selector)
    const instance = new constructor // 1、クラスのnameにアクセスするためにインスタンスを生成する。ただしインスタンスを指定するためにはnewが使えるようにしなければならない
    if (mountedElement) {
      mountedElement.innerHTML = template
      mountedElement.querySelector("h1")!.textContent = instance.name
    }
  }
}



@Component("<h1>{{name}}</h1>","#app")//index.htmlにある#appにh1タグを埋め込むよう作成してみる

@Logging("明日の天気はなんだろうね")
class User {
  name = "yaoooooo"
  constructor() {
    console.log("User was created!")
  }
}