// 条件文を使って型を絞り込む記述3つ(タイプガードと呼ばれる)　
type Engineer = {
  name: string
  role:string
}
type Blogger = {
  name: string
  follower:number
}
type EngineerBlogger = Engineer & Blogger

const jack:EngineerBlogger= {
  name: "Jack",
  role: "Back-end",
  follower:300
}

function toUpperCase(x: string | number) {
  //①typeofを使用して分岐させる
  if (typeof x === "string") {
    return x.toUpperCase() 
  }
  return ""
}

type NomadWorker = Engineer | Blogger 
function describeProfile(nomadworker:NomadWorker) {
  console.log(nomadworker.name) //nameしかアクセスできない、EngineerとBloggerに共通してるプロパティのみ
  // ②もし片方しかないオブジェクトのキーにアクセスしたい場合in演算子を使う
  if ("role" in nomadworker) {
    console.log(nomadworker.role)
  }
  if ("follower" in nomadworker) {
    console.log(nomadworker.follower)
  }
}

class Dog {
  speak() {
    console.log("Bow-wow")
  }
} 
class Bird {
  speak() {
    console.log("tweet-tweet")
  }
  fly() {
    console.log("flutter")
  } 
} 
type Pet = Dog | Bird
function havePet(pet:Pet) {
  pet.speak() //speakはどちらにもあるのでアクセスが可能
  // ③キーではなくインスタンスオブを使用してタイプガードを行う
  if (pet instanceof Bird) {
    pet.fly()
  }
}

// havePet(new Dog())
havePet(new Bird())//Birdから生成されたインスタンスのみflyが行われる
havePet({speak(){console.log("Hello")} ,fly(){console.log("not fly")}})//helloは出力されるがflyは無効
