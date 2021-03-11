// 型の互換性を確認しよう
type Engineer = {
  name: string;
  role: string;
};
type Blogger = {
  name: string;
  follower: number;
};
type EngineerBlogger = Engineer & Blogger;

const jack: EngineerBlogger = {
  name: 'Jack',
  role: 'Back-end',
  follower: 300,
};

function toUpperCase(x: string | number) {
  if (typeof x === 'string') {
    return x.toUpperCase();
  }
  return x; 
}

type NomadWorker = Engineer | Blogger;
function describeProfile(nomadworker: NomadWorker) {
  console.log(nomadworker.name);
  if ('role' in nomadworker) {
    console.log(nomadworker.role);
  }
  if ('follower' in nomadworker) {
    console.log(nomadworker.follower);
  }
}

class Dog {
  kind: 'dog' = 'dog';
  speak() {
    console.log('Bow-wow');
  }
}
class Bird {
  kind: 'bird' = 'bird';
  speak() {
    console.log('tweet-tweet');
  }
  fly() {
    console.log('flutter');
  }
}
type Pet = Dog | Bird;
function havePet(pet: Pet) {
  pet.speak(); 
  switch (pet.kind) {
    case 'bird':
      pet.fly();
  }
}
// havePet(new Bird());
　
// (document.getElementById('input') as HTMLInputElement).value = "initial input value"

interface Designer {
  name: string
}
const designer: Designer = {
  name: "Hora",
}

interface DownloadedData {
  id: number
  user: {
    name?: {
      first: string
      last:string
    }
  }
}
const downloadedData: DownloadedData = {
  id: 1,
  user :{}
}
console.log(downloadedData.user?.name) 
console.log(downloadedData.user?.name?.first) 
const userData = downloadedData.user ?? "no-user" 

type id = DownloadedData["id"]
type user = DownloadedData["user"]["name"]
type union = DownloadedData["id" | "user"] 

//構造的部分型の応用
let target :"hello" = "hello"
let source: string = "hello"
source = target //可能
// target = source //不可能,targetの方が厳しい型だから
enum Color  {
  RED,
  BLUE
}
let target2 = Color.RED
let source2 = 0
target2 = source2 //逆も可能、enum型とnumber型は互換性がある

// 関数の代入はややこしいのでドキュメントを読むこと！
let target3 = function (a: string,b:string) { }
let source3 = function (a: string) { }
target3 = source3 //可能、引数が多いとJavaScriptでは無視されるため問題はない
// source3 = target3 //不可能、解決策としてオプショナルパラメータ（b?と書く）を使用することで回避が可能

// クラスの代入
class AdvancedPerson  {
  name = "Peter"
}
class AdvancedCar {
  name = "aqua"
  age=29
}
let target4 = new AdvancedPerson()
let source4 = new AdvancedCar()
target4 = source4　//可能、左（代入先）が多いとダメ、右（代入する値）が多い分には可能
// 更にはクラスのプロパティにprivate,protectedがあるとダメ。そのクラスから作られたインスタンス同士でないと代入は不可。
