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
/**
 * Resuelva el siguiente problema usando programacion orientada objetos y herencia:
 * se necesita implementar un sistema para la venta de peliculas en formatos cd, dvd,
 * blu-ray. Donde debe estar involucrado el cliente.
 * se debe guardar cds, dvds, blue-rays en una misma lista.
 * Se debe poder calcular el monto total percibido por la venta de dvds.
 * Se debe poder calcular el monto total percibido por la venta de cds.
 * Se debe poder calcular el monto total percibido por la venta de blu-rays.
 * Se debe poder calcular el monto total percibido por la venta de cds, dvds y blue-ray.
 * los 3 tipos de discos deben guardar en una lista.
 */
var Producto = /** @class */ (function () {
    function Producto(pr1, pr2, pr3) {
        this.producto1 = pr1;
        this.producto2 = pr2;
        this.producto3 = pr3;
        this.precios = [];
    }
    Producto.prototype.variedadPrecio = function (montoCobrado) {
        this.precios.push(montoCobrado);
    };
    return Producto;
}());
exports.Producto = Producto;
var Tienda = /** @class */ (function () {
    function Tienda(nom) {
        this.nombre = nom;
        this.formato = [];
    }
    Tienda.prototype.formatoProducto = function (discoComprado) {
        this.formato.push(discoComprado);
    };
    return Tienda;
}());
exports.Tienda = Tienda;
var productos = new Producto('cds', 'dvds', 'blu-ray');
console.log(productos);
var caracteristicas = new Tienda('showsMania');
console.log(caracteristicas);
var Disco = /** @class */ (function (_super) {
    __extends(Disco, _super);
    function Disco(name) {
        return _super.call(this, 'pr1', 'pr2', 'pr3') || this;
    }
    return Disco;
}(Producto));
exports.Disco = Disco;
