"use strict";
exports.__esModule = true;
var Bar = /** @class */ (function () {
    function Bar(nom, cap) {
        this.nombre = nom;
        this.capacidad = cap;
    }
    return Bar;
}());
exports.Bar = Bar;
var BarMan = /** @class */ (function () {
    function BarMan(nomb, apellid) {
        this.nombre = nomb;
        this.apellido = apellid;
    }
    return BarMan;
}());
exports.BarMan = BarMan;
var trago = /** @class */ (function () {
    function trago(nombr, colr, cant) {
        this.nombre = nombr;
        this.color = colr;
        this.cantidad = cant;
    }
    return trago;
}());
exports.trago = trago;
var Bar1 = new Bar("Nueva era", 50);
var Bar2 = new Bar("Oasis", 150);
var BarMan1 = new BarMan("Bookie", "Meneces");
var BarMan2 = new BarMan("Diego", "Paz");
var trago1 = new trago("Fernet", "negro", 200);
var trago2 = new trago("Patron Cafe", "negro", 150);
console.log(Bar1);
console.log(Bar2);
console.log(BarMan1);
console.log(BarMan2);
console.log(trago1);
console.log(trago2);
