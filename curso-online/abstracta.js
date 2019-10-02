"use strict";
/*export abstract class Operacion{
    private a:number;
    private b:number;
    public constructor(a:number,b:number){
        this.a=a;
        this.b=b;
    public abstract int Operacion;suma(a:number,b:number){
        return (a+ b);
    }
    //public Operacion.resta(a:number,b:number){
        //return (a - b);
    }
    }*/
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
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.molestar = function () {
        console.log('yo molesto' + 'jugando');
    };
    return Animal;
}());
exports.Animal = Animal;
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Perro.prototype.hacerRuido = function () {
        console.log('....');
    };
    return Perro;
}(Animal));
exports.Perro = Perro;
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gato.prototype.hacerRuido = function () {
        console.log('miau');
    };
    return Gato;
}(Animal));
exports.Gato = Gato;
function hacerRuido(animal, Animal) {
    animal.hacerRuido();
}
var perro = new Perro();
var gato = new Gato();
console.log('perro');
hacerRuido(perro, gato);
perro.molestar();
console.log('tan bonito');
