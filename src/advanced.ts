// オーバーロードの応用（関数の型のユニオン）
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

//関数のオーバーロードの優先順位は上から
function toUpperCase(x: string): string;
function toUpperCase(x: number): number;
function toUpperCase(x: string | number): string | number {
  if (typeof x === "string") {
    return x.toUpperCase()
  }
  return x
}

const upperHello = toUpperCase
interface TmpFunc {
  (x: string): string
  (x:number):number
}
// const upperHello: TmpFunc = function (x: string | number) { return x}

// interface FuncA {
//   (a: string, b: number): number
//   (a: number, b: string): number
// }
// interface FuncB {
//   (a:string):number
// }
// let intersecFunc: FuncA & FuncB 
// intersecFunc = function (a: number | string, b?: number | string) { return 0 }
interface FuncA {
  (a:number): number
}
interface FuncB {
  (a:string):string
}
let unionFunc: FuncA | FuncB //関数の型をユニオンで繋げたら、パラメータはインターセクション型になり、戻り値はユニオン型になる
//今回の場合、stringとnumberのインターセクション型となりneverとなる,どっちも受け付けるのでややこしい







