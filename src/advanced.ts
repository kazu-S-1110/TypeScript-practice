// LookUp型を使ってオブジェクトのメンバーの型を取得する
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

// オブジェクトのプロパティの型を取得したいときは[]を使用して取得する
type id = DownloadedData["id"]
type user = DownloadedData["user"]["name"]　//階層構造で指定することも可能
type union = DownloadedData["id" | "user"] //ユニオン型もできるよ
