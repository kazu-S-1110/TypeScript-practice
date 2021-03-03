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
    Person.isAdult = function (age) {
        if (age > 17)
            return true;
        return false;
    };
    Person.prototype.incrementAge = function () {
        this.age += 1;
    };
    Person.prototype.greeting = function () {
        console.log("I'm " + this.name + ",I am " + this.age + " old");
        //継承先のメソッドにアクセスしたい場合はabstractを使用すること。使用する場合にはクラスの宣言時にも書くこと
        this.explainJob();
    };
    Person.species = "ホモ・サピエンス";
    return Person;
}());
//abstractを使用した場合、そのクラスからインスタンスを作成することは不可能。継承前提で書く。
//失敗例　const hoge = new Person
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, age, _subject) {
        var _this = _super.call(this, name, age) || this;
        _this._subject = _subject;
        _this.greeting();
        return _this;
    }
    Teacher.prototype.explainJob = function () {
        console.log("I'm teacher and I teach " + this._subject);
    };
    Teacher.prototype.greeting = function () {
        console.log("I'm " + this.name + ",I am " + this.age + " old, I teach " + this._subject + ".");
    };
    return Teacher;
}(Person));
var teacher = new Teacher("sensei", 40, "English");
