// Non-null assertionの使い方
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

const input = document.getElementById('input')! //末尾にエクスクラメーションマークを書きNullじゃないことを明示する
// if文で書くより短くなるが手動で定義することになるので注意が必要
// input.value = 'initial input value';
