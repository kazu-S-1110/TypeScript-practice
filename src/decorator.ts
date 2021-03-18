//デコレーターファクタリーについて
//デコレーターはパラメータに１つのみしか設定できない。
// そこで２つ以上受け取るためにデコレーターを返すデコレーターファクタリーを使用する。
// デコレーターファクタリーの中にデコレーターを内蔵するだけで良い

// function Logging(constructor: Function) {  //デコレーター
//   console.log("Logging...")
//   console.log(constructor )
// }

function Logging(message:string) {　//デコレーターファクタリー、これでパラメータを受け取ることが可能
  return function Logging(constructor: Function) { 
    console.log("Logging...")
    console.log(message)
    console.log(constructor)
  }
  
}

@Logging("明日の天気はなんだろうね")
class User {
  name = "Jack"
  constructor() {
    console.log("User was created!")
  }
}