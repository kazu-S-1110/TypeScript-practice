// オーバーロードの応用（関数型のオーバーロードはInterfaceで定義する）
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

//オーバーロードした関数を代入したものの型はどうなるか。
const upperHello = toUpperCase
//明示的に型を書いて定義する
interface TmpFunc {
  (x: string): string
  (x:number):number
}
// もしオーバーロードした関数に型注釈する際は型に沿った関数を書かないとダメ。
// const upperHello: TmpFunc = function (x: string | number) { return x}


