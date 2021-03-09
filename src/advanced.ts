// インデックスシグネチャを使用して柔軟なオブジェクトを使用する方法　
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
}
// havePet(new Bird());
　
// (document.getElementById('input') as HTMLInputElement).value = "initial input value"

//原則としてオブジェクトにはプロパティを追加することはできない（型安全が働く）
interface Designer {
  name: string
  // 書き方
  [index: string]: string //インデックスシグネチャがstringなら他プロパティも揃えなければならない
  // 注意、なんでも追記できてしまうので相当な注意が必要
}
const desiner: Designer = {
  name: "Hora",
  role: "designer", // インデックスシグネチャを書いてないとエラーを吐いてしまう
  hoge: "hoge",
  fuga:"fuga"
}
desiner.gaga = "gaga" //なにもエラーを吐かない

console.log(desiner.gue) //これもエラーを吐かないので要注意
