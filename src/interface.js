"use strict";
// クラスにインターフェイスを適用させる方法（少なくともインターフェイスの条件を満たすよう定義する）
// 適用させるインターフェイスは複数指定することが可能,
// インターフェイスの代わりにタイプエイリアスも指定可能だが、インターフェイスの方がわかりやすい
var Developer = /** @class */ (function () {
    function Developer(name, age, 
    // プロパティを追加することも可能
    experience) {
        this.name = name;
        this.age = age;
        this.experience = experience;
    }
    Developer.prototype.greeting = function (message) {
        console.log(message);
    };
    return Developer;
}());
