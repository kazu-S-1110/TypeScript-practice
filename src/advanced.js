"use strict";
var _a, _b, _c, _d;
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
    id: 1,
    user: {}
};
console.log((_a = downloadedData.user) === null || _a === void 0 ? void 0 : _a.name);
console.log((_c = (_b = downloadedData.user) === null || _b === void 0 ? void 0 : _b.name) === null || _c === void 0 ? void 0 : _c.first);
var userData = (_d = downloadedData.user) !== null && _d !== void 0 ? _d : "no-user";
//構造的部分型の応用
var target = "hello";
var source = "hello";
source = target; //可能
// target = source //不可能,targetの方が厳しい型だから
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["BLUE"] = 1] = "BLUE";
})(Color || (Color = {}));
var target2 = Color.RED;
var source2 = 0;
target2 = source2; //逆も可能、enum型とnumber型は互換性がある
// 関数の代入はややこしいのでドキュメントを読むこと！
var target3 = function (a, b) { };
var source3 = function (a) { };
target3 = source3; //可能、引数が多いとJavaScriptでは無視されるため問題はない
// source3 = target3 //不可能、解決策としてオプショナルパラメータ（b?と書く）を使用することで回避が可能
// クラスの代入
var AdvancedPerson = /** @class */ (function () {
    function AdvancedPerson() {
        this.name = "Peter";
    }
    return AdvancedPerson;
}());
var AdvancedCar = /** @class */ (function () {
    function AdvancedCar() {
        this.name = "aqua";
        this.age = 29;
    }
    return AdvancedCar;
}());
var target4 = new AdvancedPerson();
var source4 = new AdvancedCar();
target4 = source4; //可能、左（代入先）が多いとダメ、右（代入する値）が多い分には可能
// 更にはクラスのプロパティにprivate,protectedがあるとダメ。そのクラスから作られたインスタンス同士でないと代入は不可。
