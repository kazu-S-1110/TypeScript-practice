"use strict";
//keyofを使用してオブジェクトキーのユニオン型を作る方法
//動的に対応できるため、以下の書き方に慣れると良い。
function copy(value, key) {
    console.log(value[key]);
    return value;
}
console.log(copy({ name: 'Jack', age: 28, height: 170 }, "height")); //オブジェクトキーが複数でも対応ができる
