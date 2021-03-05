"use strict";
var Developer = /** @class */ (function () {
    function Developer(name, age, experience) {
        this.name = name;
        this.age = age;
        this.experience = experience;
    }
    Developer.prototype.greeting = function (message) {
        console.log(message);
    };
    return Developer;
}());
// 構造的部分型
// 型注釈以上の代入をすることは可能、言い換えれば型注釈で宣言されたものは持っている。
var user = new Developer("Jack", 20, 3);
// user.experience ⇦エラーを吐く
