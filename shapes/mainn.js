"use strict";
/**
 * Clases
 */
exports.__esModule = true;
var Rectangle = /** @class */ (function () {
    function Rectangle(px, py, hei, wid) {
        this.posX = px;
        this.posY = py;
        this.height = hei;
        this.width = wid;
    }
    Rectangle.prototype.setPosX = function (px) {
        this.posX = px;
    };
    Rectangle.prototype.getPosX = function () {
        return this.posX;
    };
    Rectangle.prototype.setPosY = function (py) {
        this.posY = py;
    };
    Rectangle.prototype.getPosY = function () {
        return this.posY;
    };
    Rectangle.prototype.setHeight = function (hei) {
        this.height = hei;
    };
    Rectangle.prototype.getHeight = function () {
        return this.height;
    };
    Rectangle.prototype.setWidth = function (wid) {
        this.width = wid;
    };
    Rectangle.prototype.getWidth = function () {
        return this.width;
    };
    Rectangle.prototype.desplazar = function (posXnew, posYnew) {
        this.posX = posXnew;
        this.posY = posYnew;
    };
    Rectangle.prototype.getArea = function () {
        var area = this.height * this.width;
        return area;
    };
    Rectangle.prototype.getPerimeter = function () {
        var perimeter = 2 * this.height + 2 * this.width;
        return perimeter;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
/**
 * Pruebas
 */
var rectangle1 = new Rectangle(5, 10, 8, 12);
rectangle1.setPosX(7);
rectangle1.setPosY(12);
rectangle1.setHeight(40);
rectangle1.setWidth(60);
console.log(rectangle1);
rectangle1.desplazar(50, 50);
console.log(rectangle1);
var areaRectangle1 = rectangle1.getArea();
console.log(areaRectangle1);
var perimeter1 = rectangle1.getPerimeter();
console.log(perimeter1);
//let areaRectangle1:number = rectangle1.getHeight()* rectangle1.getWidth();
//console.log(areaRectangle1);
