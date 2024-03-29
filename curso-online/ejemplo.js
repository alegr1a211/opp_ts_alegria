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
var Fruta = /** @class */ (function () {
    function Fruta(nom, temp, vit) {
        this.nombre = nom;
        this.temporada = temp;
        this.vitamina = vit;
    }
    return Fruta;
}());
exports.Fruta = Fruta;
var Mandarina = /** @class */ (function (_super) {
    __extends(Mandarina, _super);
    function Mandarina(nom, temp, vit, color, prec, crec) {
        var _this = _super.call(this, nom, temp, vit) || this;
        _this.color = color;
        _this.precio = prec;
        _this.crecimiento = crec;
        return _this;
    }
    return Mandarina;
}(Fruta));
exports.Mandarina = Mandarina;
var Manzana = /** @class */ (function (_super) {
    __extends(Manzana, _super);
    function Manzana(nom, temp, vit, colr, pre, crec) {
        var _this = _super.call(this, nom, temp, vit) || this;
        _this.color = colr;
        _this.precio = pre;
        _this.crecimiento = crec;
        return _this;
    }
    return Manzana;
}(Fruta));
exports.Manzana = Manzana;
var Sandia = /** @class */ (function (_super) {
    __extends(Sandia, _super);
    function Sandia(nom, temp, vit, col, prec, crec) {
        var _this = _super.call(this, nom, temp, vit) || this;
        _this.color = col;
        _this.precio = prec;
        _this.crecimiento = crec;
        return _this;
    }
    return Sandia;
}(Fruta));
exports.Sandia = Sandia;
var fruta1 = new Mandarina('mandarina1', 'frio', 'vitC.antioxidante', 'anaranjado', 8, 'arboles');
console.log(fruta1);
var fruta2 = new Manzana('manzana1', 'enero', 'vitE.vitC', 'rojo', 10, 'arboles');
console.log(fruta2);
var fruta3 = new Sandia('sandia1', 'primavera', 'vitA.B6', 'verde', 12, 'sobre tierra');
console.log(fruta3);
var resultado = fruta1 instanceof Fruta;
console.log(resultado);
var resultado1 = Manzana instanceof Fruta;
console.log(resultado1);
var resultado2 = fruta3 instanceof Sandia;
console.log(resultado2);
var resultado3 = Sandia instanceof Sandia;
console.log(resultado3);
var resultado4 = Mandarina instanceof Sandia;
console.log(resultado4);
