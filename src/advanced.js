"use strict";
var jack = {
    name: 'Jack',
    role: 'Back-end',
    follower: 300,
};
function toUpperCase(x) {
    if (typeof x === 'string') {
        return x.toUpperCase();
    }
    return '';
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
    pet.speak(); //speakはどちらにもあるのでアクセスが可能
    switch (pet.kind) {
        case 'bird':
            pet.fly();
    }
    // if (pet instanceof Bird) {
    //   pet.fly();
    // }
}
// havePet(new Bird());
var input = document.getElementById('input'); //末尾にエクスクラメーションマークを書きNullじゃないことを明示する
// if文で書くより短くなるが手動で定義することになるので注意が必要
// input.value = 'initial input value';
