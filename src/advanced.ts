// constアサーション
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
  name: string;
}
const designer: Designer = {
  name: 'Hora',
};

interface DownloadedData {
  id: number;
  user: {
    name?: {
      first: string;
      last: string;
    };
  };
}
const downloadedData: DownloadedData = {
  id: 1,
  user: {},
};
console.log(downloadedData.user?.name);
console.log(downloadedData.user?.name?.first);
const userData = downloadedData.user ?? 'no-user';

type id = DownloadedData['id'];
type user = DownloadedData['user']['name'];
type union = DownloadedData['id' | 'user'];

function toUpperCase(x: string): string;
function toUpperCase(x: number): number;
function toUpperCase(x: string | number): string | number {
  if (typeof x === 'string') {
    return x.toUpperCase();
  }
  return x;
}

const upperHello = toUpperCase;
interface TmpFunc {
  (x: string): string;
  (x: number): number;
}
// function advancedFunc(...args:number[]) {

// advancedFunc(3, 2, 4, 1)
// function advancedFunc(...args: readonly[number, string, boolean?, ...number[]]) { }
function advancedFunc(...args: readonly number[]) {}

let milk = 'milk' as const;
let drink = milk; //この場合、Drinkは”milk”というリテラル型
let milk2 = 'milk';
let drink2 = milk2; //この場合、drink2はstring型、constでいい感じがするけど配列やタプルでconstアサーションは役立つ

const array = [10, 20]; //この場合arrayはnumberの配列型
const array2 = [10, 20, 30] as const; //この場合、array2は[10,20,30]しかない配列、つまりタプル型になってしまう。（readonlyになる）-> タプル型を書くときはこう書くと便利かも
const peter = {
  name: 'peter',
  age: 35,
} as const; //こう書くとpeterというオブジェクトはリテラル型の読み取り専用になる。意外と便利なので覚えたい
