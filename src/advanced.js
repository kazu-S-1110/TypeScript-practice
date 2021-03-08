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
// const input = document.getElementById("input") //これだと型推論が働いてしまい、input.valueにアクセスできない。型注釈してもダメ(TypescriptでHTMLまでは解析できない)。なので型アサーションをして手動で無理矢理型をつける。
var input = document.getElementById('input'); //inputであるとアサーションするには＜＞で囲む
//別解
// const input = document.getElementById("id") as HTMLInputElement としてもOK
// もしReact（JSX）で書いてる場合は、タグと混同してしまうのでasで書いた方が無難
input.value = 'initial input value';
// 上2行をさらにコンパクトに書くと
// (document.getElementById("input") as HTMLInputElement).value = "initial input value"
