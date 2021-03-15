"use strict";
//extendsを使用して型パラメータに制約をつける
//型パラメータに最低限実装した型を指定するために用いる
function copy(value) {
    return value;
}
console.log(copy({ name: 'Jack' }));
