"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greeting = function () {
        console.log("I'm " + this.name + ",I am " + this.age + " old");
    };
    return Person;
}());
var hoge = new Person("hoge", 20);
hoge.greeting();
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    // もし初期化時点でプロパティを追加したいなら以下を書く必要がある
    function Teacher(name, age, subject) {
        var _this = _super.call(this, name, age) || this;
        _this.subject = subject;
        return _this;
    }
    // メソッドの上書きがしたい場合は、書くしかない。
    Teacher.prototype.greeting = function () {
        console.log("I'm " + this.name + ",I am " + this.age + " old, I teach " + this.subject + ".");
    };
    return Teacher;
}(Person));
var teacher = new Teacher("sensei", 40, "English");
teacher.greeting();
