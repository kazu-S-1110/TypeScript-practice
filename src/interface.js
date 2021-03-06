"use strict";
var sumFunc;
sumFunc = function (n1, n2) { return n1 + n2; };
var namable = {
    name: "Jack"
};
var Developer = /** @class */ (function () {
    function Developer(age, experience, initName //もっと簡単にpublic name?:stringと書くことも可能　
    ) {
        this.age = age;
        this.experience = experience;
        if (initName) {
            this.name = initName;
        }
    }
    Developer.prototype.greeting = function (message) {
        if (message === void 0) { message = "hello"; }
        console.log(message);
    };
    return Developer;
}());
var user = new Developer(20, 3);
var user2 = new Developer(23, 1, "hoge");
