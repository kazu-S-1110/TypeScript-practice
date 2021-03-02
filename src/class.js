"use strict";
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
