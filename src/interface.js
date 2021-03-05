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
var user = new Developer("Jack", 20, 3);
// user.name = "Sparrow" readonlyなため無効な記述
// しかし、implementsで指定したクラス内でpublicにしていた場合は変更が可能（上書きされる）
var dever = new Developer("hoge", 30, 1);
dever.name = "fuga"; //可能な記述（publicで上書きしているため）
