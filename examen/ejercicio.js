"use strict";
exports.__esModule = true;
/**
 * Desarrolla una clase CD con los siguientes atributos:
 * canciones: un array(lista)de objetos de la clase cancion.
 * contador:la siguiente posicion libre del array(lista)canciones.
 * y los siguientes metodos :CD():constructor predeterminado
 * (creara el array canciones).
 * numeroCanciones():devuelve el valor del contador de canciones.
 * dameCancion(int):devuelve el valor del contador de canciones.
 * grabaCancion(int, cancion):cambia la cancion de la posicion
 * indicada por la nueva cancion proporcionada.
 * agrega(cancion):agrega al final del array la cancion proporcionada.
 * elimina(int):elimina la cancion que se encuentra en la posicion
 * indicada.
 */
var Cancion = /** @class */ (function () {
    function Cancion(nombreCancion, genero, autor) {
        this.nombreCancion = nombreCancion;
        this.genero = genero;
        this.autor = autor;
    }
    return Cancion;
}());
exports.Cancion = Cancion;
var Cd = /** @class */ (function () {
    function Cd() {
        this.canciones = [];
        this.contador = 0;
    }
    Cd.prototype.agregarListaCanciones = function (canciones) {
        this.canciones.push(canciones);
        this.contador++;
    };
    Cd.prototype.darCancion = function (posiCancion) {
        return this.canciones[posiCancion];
    };
    Cd.prototype.grabarCancion = function (canciones, contador) {
        return this.canciones[contador] = canciones;
    };
    return Cd;
}());
exports.Cd = Cd;
var cancion1 = new Cancion('Sabor Sabor', 'cumbia', 'Los Bibis');
var cancion2 = new Cancion('Rata Blanca', 'Rock', 'James');
var cancion3 = new Cancion('son de amores', 'baladas romanticas', 'andy y lucas');
var cd1 = new Cd();
cd1.agregarListaCanciones(cancion1);
cd1.agregarListaCanciones(cancion2);
cd1.agregarListaCanciones(cancion3);
/*console.log(cd1);*/
console.log(cd1.darCancion(0));
console.log(cd1.grabarCancion(cancion2, 1));
