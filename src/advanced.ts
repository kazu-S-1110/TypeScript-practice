// Nullish Coalescing の書き方　（Coalesce：結合する、合体する）
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
  user?: {
    name?: {
      first: string
      last:string
    }
  }
}
const downloadedData: DownloadedData = {
  id:1
}
// downloadedData.userにアクセスしたいとした時の対処法
// ①if文で返す
// ②！で宣言する
// ③optional chainingを使用する（以下が記述）
console.log(downloadedData.user?.name) //もし？をつけたところがundefinedかnullの場合はundefinedを返す
console.log(downloadedData.user?.name?.first) //繋げることも可能

const userData = downloadedData.user ?? "no-user" //nullish coalescing、もし代入する値がundefinedかNullの場合のみ、次の値を代入する
// const userData = downloadedData.user || "no-user"と書いた場合でも似た挙動をする。違いは代入するデータの違い。
// 0や””（空文字）でもFalseとなりno-userとなってしまうところ


