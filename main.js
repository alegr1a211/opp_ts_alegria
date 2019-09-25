"use strict";
exports.__esModule = true;
var Bar = /** @class */ (function () {
    function Bar(nom, cap) {
        this.nombre = nom;
        this.capacidad = cap;
    }
    Bar.prototype.setNombre = function (nom) {
        this.nombre = nom;
    };
    Bar.prototype.getNombre = function () {
        return this.nombre;
    };
    Bar.prototype.setCapacidad = function (cap) {
        this.capacidad = cap;
    };
    Bar.prototype.getCapacidad = function () {
        return this.capacidad;
    };
    return Bar;
}());
exports.Bar = Bar;
var BarMan = /** @class */ (function () {
    function BarMan(nomb, apellid) {
        this.nombre = nomb;
        this.apellido = apellid;
    }
    BarMan.prototype.setNombre = function (nomb) {
        this.nombre = nomb;
    };
    BarMan.prototype.getNombre = function () {
        return this.nombre;
    };
    BarMan.prototype.setApellido = function (apellid) {
        this.apellido = apellid;
    };
    BarMan.prototype.getApellido = function () {
        return this.apellido;
    };
    return BarMan;
}());
exports.BarMan = BarMan;
var Trago = /** @class */ (function () {
    function Trago(nombr, colr, cant) {
        this.nombre = nombr;
        this.color = colr;
        this.cantidad = cant;
    }
    Trago.prototype.setNombre = function (nombr) {
        this.nombre = nombr;
    };
    Trago.prototype.getNombre = function () {
        return this.nombre;
    };
    Trago.prototype.setColor = function (colr) {
        this.color = colr;
    };
    Trago.prototype.getColor = function () {
        return this.color;
    };
    Trago.prototype.setCantidad = function (cant) {
        this.cantidad = cant;
    };
    Trago.prototype.getCantidad = function () {
        return this.cantidad;
    };
    return Trago;
}());
exports.Trago = Trago;
var Bar1 = new Bar("Nueva era", 50);
var Bar2 = new Bar("Oasis", 150);
var BarMan1 = new BarMan("Bookie", "Meneces");
var BarMan2 = new BarMan("Diego", "Paz");
var Trago1 = new Trago("Fernet", "negro", 200);
var Trago2 = new Trago("Patron Cafe", "negro", 150);
//console.log(Bar1);
//console.log(Bar2);
//console.log(BarMan1);
//console.log(BarMan2);
//console.log(Trago1);
//console.log(trago2);
Bar1.setNombre("Mangos");
console.log(Bar1.getNombre());
BarMan1.setNombre("Bruno");
console.log(BarMan1.getNombre());
Trago1.setNombre("Ron");
console.log(Trago1.getNombre());
