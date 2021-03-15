//extendsを使用して型パラメータに制約をつける

//型パラメータに最低限実装した型を指定するために用いる
function copy<T extends {name: string}>(value: T): T { //これによりTは最低限name:stringを持ったものが保証される
  return value;
}
console.log(copy({ name: 'Jack' }));
