// タグ付きUnionで型を絞り込む方法(判別共用体(Discriminated Unions)とかとも呼ばれる)
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
  kind: 'dog' = 'dog'; //kindプロパティが判別とかタグとか呼ばれてる
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
  switch (
    pet.kind //タグでswitch文を書くのに向いている
  ) {
    case 'bird':
      pet.fly();
  }
  // if (pet instanceof Bird) {
  //   pet.fly();
  // }
}

havePet(new Bird());
