// 関数のオーバーロードを使用して、戻り値の型を正しく
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

function toUpperCase(x: string): string //解決策２、これを追記した
function toUpperCase(x: number): number //解決策２、数字のみの場合
function toUpperCase(x: string | number) {
  if (typeof x === 'string') {
    return x.toUpperCase();
  }
  return x; 
}
const upperHello = toUpperCase("hello") //この状態ではまだパラメータが文字列か数字が判別できてないため、number型のメソッドが扱えてしまう。
// 解決策１　型アサーションを使用する
// const upperHello = toUpperCase("hello") as string と書いて型を明示的にTypescriptに伝える方法
// この方法は複数回使う関数に対しては冗長。

// 解決策２　関数のオーバーロードを使用する
// もう一度　同じ関数を書き、パラメータを限定して書く。
// 注意として本来の関数で書いたパラメータは無効とされる。つまり、x:string|numberが通用しなくなるので注意

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
const desiner: Designer = {
  name: "Hora",
}

