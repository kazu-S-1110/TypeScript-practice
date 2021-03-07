"use strict";
var jack = {
    name: "Jack",
    role: "Back-end",
    follower: 300
};
function toUpperCase(x) {
    //①typeofを使用して分岐させる
    if (typeof x === "string") {
        return x.toUpperCase();
    }
    return "";
}
function describeProfile(nomadworker) {
    console.log(nomadworker.name); //nameしかアクセスできない、EngineerとBloggerに共通してるプロパティのみ
    // ②もし片方しかないオブジェクトのキーにアクセスしたい場合in演算子を使う
    if ("role" in nomadworker) {
        console.log(nomadworker.role);
    }
    if ("follower" in nomadworker) {
        console.log(nomadworker.follower);
    }
}
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.speak = function () {
        console.log("Bow-wow");
    };
    return Dog;
}());
var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.speak = function () {
        console.log("tweet-tweet");
    };
    Bird.prototype.fly = function () {
        console.log("flutter");
    };
    return Bird;
}());
function havePet(pet) {
    pet.speak(); //speakはどちらにもあるのでアクセスが可能
    // ③キーではなくインスタンスオブを使用してタイプガードを行う
    if (pet instanceof Bird) {
        pet.fly();
    }
}
// havePet(new Dog())
havePet(new Bird()); //Birdから生成されたインスタンスのみflyが行われる
havePet({ speak: function () { console.log("Heloo"); }, fly: function () { console.log("not fly"); } });
