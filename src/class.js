"use strict";
var Person = /** @class */ (function () {
    function Person(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    Person.prototype.greeting = function () {
        console.log("I'm " + this.firstname + "," + this.lastname);
    };
    return Person;
}());
var hogehoge = new Person("hoge", "sage");
hogehoge.greeting();
var anotherPerson = {
    firstname: "fuga",
    lastname: "hige",
    anotherGreeting: hogehoge.greeting
};
anotherPerson.anotherGreeting();
