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
    name: "Hora",
};
var downloadedData = {
    id: 1,
    user: {}
};
console.log((_a = downloadedData.user) === null || _a === void 0 ? void 0 : _a.name);
console.log((_c = (_b = downloadedData.user) === null || _b === void 0 ? void 0 : _b.name) === null || _c === void 0 ? void 0 : _c.first);
var userData = (_d = downloadedData.user) !== null && _d !== void 0 ? _d : "no-user";
function toUpperCase(x) {
    if (typeof x === "string") {
        return x.toUpperCase();
    }
    return x;
}
var upperHello = toUpperCase;
var intersecFunc; //interfaceのインターセクション型、左から書いたinterfaceが優先される。
// これも全ての型に合わせた引数、パターンを考慮して関数を書く必要がある。
intersecFunc = function (a, b) { return 0; };
