"use strict";
var _a, _b, _c;
var jack = {
    name: 'Jack',
    role: 'Back-end',
    follower: 300,
};
function toUpperCase(x) {
    if (typeof x === 'string') {
        return x.toUpperCase();
    }
    return x;
}
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
    id: 1
};
// downloadedData.userにアクセスしたいとした時の対処法
// ①if文で返す
// ②！で宣言する
// ③optional chainingを使用する（以下が記述）
console.log((_a = downloadedData.user) === null || _a === void 0 ? void 0 : _a.name); //もし？をつけたところがundefinedかnullの場合はundefinedを返す
console.log((_c = (_b = downloadedData.user) === null || _b === void 0 ? void 0 : _b.name) === null || _c === void 0 ? void 0 : _c.first); //繋げることも可能
