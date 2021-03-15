//ジェネリクスを使用して型を引数として扱う
function copy(value) {
    return value;
}
console.log(copy('hello')); //こう書いてしまうとcopyから先の関数を使えない、toUppercaseとか使えない（回避策としてasを使うとか）
// そこで役立つのがジェネクリス
function copy2(value) {
    //書き方は角括弧を関数名の直後に書く
    return value;
}
console.log(copy2('hello').toUpperCase());
// また型推論も効く
console.log(copy2({ name: 'Jack' }.name));
