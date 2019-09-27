"use strict";
exports.__esModule = true;
var Triangle = /** @class */ (function () {
    function Triangle(ba, hei) {
        this.base = ba;
        this.height = hei;
    }
    Triangle.prototype.setBase = function (ba) {
        this.base = ba;
    };
    Triangle.prototype.getBase = function () {
        return this.base;
    };
    Triangle.prototype.setHeight = function (hei) {
        this.height = hei;
    };
    Triangle.prototype.getHeight = function () {
        return this.height;
    };
    Triangle.prototype.getArea = function () {
        var area = 0.5 * this.base * this.height;
        return area;
    };
    Triangle.prototype.getPerimeter = function () {
        var perimeter = this.base * 3;
        return perimeter;
    };
    return Triangle;
}());
exports.Triangle = Triangle;
var triangle1 = new Triangle(10, 10);
console.log(triangle1);
var areaTriangle1 = triangle1.getArea();
console.log(areaTriangle1);
var perimeterTriangle1 = triangle1.getPerimeter();
console.log(perimeterTriangle1);
