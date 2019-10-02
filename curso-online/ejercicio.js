"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var FigurasGeometricas = /** @class */ (function () {
    //public ancho:number;
    //public alto:number;
    function FigurasGeometricas(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
        this.ancho = ancho;
        this.alto = alto;
    }
    FigurasGeometricas.prototype.getAncho = function () {
        return this.ancho;
    };
    FigurasGeometricas.prototype.getAlto = function () {
        return this.alto;
    };
    return FigurasGeometricas;
}());
exports.FigurasGeometricas = FigurasGeometricas;
var Rectangulo = /** @class */ (function (_super) {
    __extends(Rectangulo, _super);
    function Rectangulo(ancho, alto, largo) {
        var _this = _super.call(this, ancho, alto) || this;
        _this.ancho = ancho;
        _this.alto = alto;
        _this.largo = largo;
        return _this;
    }
    Rectangulo.prototype.getArea = function () {
        var resultado = this.alto * this.ancho;
        return resultado;
    };
    Rectangulo.prototype.getVolumen = function () {
        var resultado = this.alto * this.ancho * this.largo;
        return resultado;
    };
    return Rectangulo;
}(FigurasGeometricas));
exports.Rectangulo = Rectangulo;
var Triangulo = /** @class */ (function (_super) {
    __extends(Triangulo, _super);
    function Triangulo(ancho, alto, largo) {
        var _this = _super.call(this, ancho, alto) || this;
        _this.ancho = ancho;
        _this.alto = alto;
        _this.largo = largo;
        return _this;
    }
    Triangulo.prototype.getArea = function () {
        var resultado = this.ancho * this.alto * 0.5;
        return resultado;
    };
    Triangulo.prototype.getVolumen = function () {
        var resultado = this.ancho * this.largo * this.alto / 3;
        return resultado;
    };
    return Triangulo;
}(FigurasGeometricas));
exports.Triangulo = Triangulo;
var rectangulo1 = new Rectangulo(10, 15, 9);
console.log(rectangulo1);
var triangulo1 = new Triangulo(20, 25, 18);
console.log(triangulo1);
console.log(rectangulo1.getArea() + ' Area');
console.log(triangulo1.getArea() + ' Area');
console.log(rectangulo1.getVolumen() + ' Volumen');
console.log(triangulo1.getVolumen() + ' Volumen');
