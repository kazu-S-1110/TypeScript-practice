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
