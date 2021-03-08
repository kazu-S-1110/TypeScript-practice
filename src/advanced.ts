// 型アサーションを使って、手動で型を上書きする方法（2つある）
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
  return '';
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
  pet.speak(); //speakはどちらにもあるのでアクセスが可能
  switch (pet.kind) {
    case 'bird':
      pet.fly();
  }
  // if (pet instanceof Bird) {
  //   pet.fly();
  // }
}
// havePet(new Bird());

// const input = document.getElementById("input") //これだと型推論が働いてしまい、input.valueにアクセスできない。型注釈してもダメ(TypescriptでHTMLまでは解析できない)。なので型アサーションをして手動で無理矢理型をつける。
const input = <HTMLInputElement>document.getElementById('input'); //inputであるとアサーションするには＜＞で囲む
//別解
// const input = document.getElementById("id") as HTMLInputElement としてもOK
// もしReact（JSX）で書いてる場合は、タグと混同してしまうのでasで書いた方が無難
input.value = 'initial input value';
// 上2行をさらにコンパクトに書くと
// (document.getElementById("input") as HTMLInputElement).value = "initial input value"
