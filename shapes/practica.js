"use strict";
exports.__esModule = true;
/**
 * clases
 */
var Square = /** @class */ (function () {
    function Square(pA, pB, sid) {
        this.posA = pA;
        this.posB = pB;
        this.side = sid;
    }
    Square.prototype.setPosA = function (pA) {
        this.posA = pA;
    };
    Square.prototype.getPosA = function () {
        return this.posA;
    };
    Square.prototype.setPosB = function (pB) {
        this.posB = pB;
    };
    Square.prototype.getPosB = function () {
        return this.posB;
    };
    Square.prototype.setSide = function (sid) {
        this.side = sid;
    };
    Square.prototype.getSide = function () {
        return this.side;
    };
    Square.prototype.getArea = function () {
        var area = this.side * this.side;
        return area;
    };
    Square.prototype.getPerimeter = function () {
        var perimeter = this.side * 4;
        return perimeter;
    };
    return Square;
}());
exports.Square = Square;
var square1 = new Square(7, 8, 5);
console.log(square1);
var areaSquare1 = square1.getArea();
console.log(areaSquare1);
var perimeterSquare1 = square1.getPerimeter();
console.log(perimeterSquare1);
/**
 * Pruebas
 */ 
