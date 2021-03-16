"use strict";
// クラスに対してジェネリクスを使用する方法
var LightDataBase = /** @class */ (function () {
    function LightDataBase() {
        this.data = [];
    }
    LightDataBase.prototype.add = function (item) {
        this.data.push(item);
    };
    LightDataBase.prototype.remove = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
    };
    LightDataBase.prototype.get = function () {
        return this.data;
    };
    return LightDataBase;
}());
var stringLightDataBase = new LightDataBase();
stringLightDataBase.add("apple");
stringLightDataBase.add("banana");
stringLightDataBase.add("orange");
stringLightDataBase.remove("apple");
console.log(stringLightDataBase.get());
