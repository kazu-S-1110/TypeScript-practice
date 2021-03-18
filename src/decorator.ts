//デコレーターとはクラスに対して装飾をする関数

function Logging(constructor: Function) { //デコレーターはクラスを受けてる。クラスは実質コンストラクター関数であり、関数型のfunctionを受け取るように記述する
  console.log("Logging...")
  console.log(constructor )
}

@Logging //まだインスタンスを生成してないのにデコレーターは走る。デコレーターはインスタンス生成時ではなく、クラスの宣言時に処理が走る
class User {
  name = "Jack"
  constructor() {
    console.log("User was created!")
  }
}