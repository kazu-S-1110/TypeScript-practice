"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.isAdult = function (age) {
        if (age > 17)
            return true;
        return false;
    };
    //もしstaticの値にアクセスする場合はthisを使わずにクラス名を書く
    Person.prototype.incrementAge = function () {
        this.age += 1;
        Person.species = "changed!";
    };
    Person.prototype.greeting = function () {
        console.log("I'm " + this.name + ",I am " + this.age + " old");
    };
    //インスタンスを作らずにクラスの値を使う方法（newとか使わない方法）
    Person.species = "ホモ・サピエンス";
    return Person;
}());
// const hoge = new Person("hoge",20);
// hoge.greeting()
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    // もし初期化時点でプロパティを追加したいなら以下を書く必要がある
    function Teacher(name, age, _subject) {
        var _this = _super.call(this, name, age) || this;
        _this._subject = _subject;
        return _this;
    }
    Object.defineProperty(Teacher.prototype, "subject", {
        // ゲッターはなにかを取得したときに走る関数のこと、セッターはなにかを変更したときに走る関数のこと（ES3では扱えないので注意）
        //ゲッターは必ず一つ以上の値を返すようにする
        get: function () {
            if (!this._subject) {
                throw new Error('There is no subject');
            }
            return this._subject;
        },
        //セッターは必ず一つ以上のプロパティを含める、またゲッターと同じ関数名を設定することが可能(ただし、扱う型は同一でなければならない）
        set: function (value) {
            if (!value) {
                throw new Error('There is no subject');
            }
            else {
                this._subject = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    // メソッドの上書きがしたい場合は、書くしかない。
    Teacher.prototype.greeting = function () {
        console.log("I'm " + this.name + ",I am " + this.age + " old, I teach " + this.subject + ".");
    };
    return Teacher;
}(Person));
var teacher = new Teacher("sensei", 40, "English");
// teacher._subject = "Math"
// teacher.greeting()
console.log(Person.species);
console.log(Person.isAdult(20));
//継承先でもstaticにしたものは呼び出しが可能
console.log(Teacher.species);
console.log(Teacher.isAdult(30));
teacher.incrementAge();
console.log(Person.species);
