//keyofを使用してオブジェクトキーのユニオン型を作る方法

type K = keyof { //keyofを使用することでキーのみを取得する、複数取得するとユニオン型となる。
  name: string
  age:number
}// ジェネリクスと組み合わせることが多い

//動的に対応できるため、以下の書き方に慣れると良い。
function copy<T extends { name: string }, U extends keyof T>(value: T, key: U): T { 
  console.log(value[key]) 
  return value;
}
console.log(copy({ name: 'Jack', age: 28, height: 170 }, "height"));//オブジェクトキーが複数でも対応ができる


