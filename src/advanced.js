"use strict";
var _a, _b, _c, _d;
var jack = {
    name: 'Jack',
    role: 'Back-end',
    follower: 300,
};
function describeProfile(nomadworker) {
    console.log(nomadworker.name);
    if ('role' in nomadworker) {
        console.log(nomadworker.role);
    }
    if ('follower' in nomadworker) {
        console.log(nomadworker.follower);
    }
}
var Dog = /** @class */ (function () {
    function Dog() {
        this.kind = 'dog';
    }
    Dog.prototype.speak = function () {
        console.log('Bow-wow');
    };
    return Dog;
}());
var Bird = /** @class */ (function () {
    function Bird() {
        this.kind = 'bird';
    }
    Bird.prototype.speak = function () {
        console.log('tweet-tweet');
    };
    Bird.prototype.fly = function () {
        console.log('flutter');
    };
    return Bird;
}());
function havePet(pet) {
    pet.speak();
    switch (pet.kind) {
        case 'bird':
            pet.fly();
    }
}
var designer = {
    name: 'Hora',
};
var downloadedData = {
    id: 1,
    user: {},
};
console.log((_a = downloadedData.user) === null || _a === void 0 ? void 0 : _a.name);
console.log((_c = (_b = downloadedData.user) === null || _b === void 0 ? void 0 : _b.name) === null || _c === void 0 ? void 0 : _c.first);
var userData = (_d = downloadedData.user) !== null && _d !== void 0 ? _d : 'no-user';
function toUpperCase(x) {
    if (typeof x === 'string') {
        return x.toUpperCase();
    }
    return x;
}
var upperHello = toUpperCase;
// function advancedFunc(...args:number[]) {
// advancedFunc(3, 2, 4, 1)
// function advancedFunc(...args: readonly[number, string, boolean?, ...number[]]) { }
function advancedFunc() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
}
var milk = 'milk';
var drink = milk; //この場合、Drinkは”milk”というリテラル型
var milk2 = 'milk';
var drink2 = milk2; //この場合、drink2はstring型、constでいい感じがするけど配列やタプルでconstアサーションは役立つ
var array = [10, 20]; //この場合arrayはnumberの配列型
var array2 = [10, 20, 30]; //この場合、array2は[10,20,30]しかない配列、つまりタプル型になってしまう。（readonlyになる）-> タプル型を書くときはこう書くと便利かも
var peter = {
    name: 'peter',
    age: 35,
}; //こう書くとpeterというオブジェクトはリテラル型の読み取り専用になる。意外と便利なので覚えたい
