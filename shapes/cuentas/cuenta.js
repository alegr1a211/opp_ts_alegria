"use strict";
exports.__esModule = true;
/**crea una clase cuenta con los metodos ingreso, reintegro
 * y transferencia. La clase contendra un constructor con parametros
 * y los metodos getters y setters.
 */
var Cuenta = /** @class */ (function () {
    function Cuenta(sald) {
        this.saldo = sald;
    }
    Cuenta.prototype.getIngreso = function () {
        return this.saldo;
    };
    Cuenta.prototype.getTransferencia = function () {
        return this.saldo;
    };
    Cuenta.prototype.getReintegro = function () {
        return this.saldo;
    };
    return Cuenta;
}());
exports.Cuenta = Cuenta;
var cuentaBCP = new Cuenta(0);
console.log(cuentaBCP);
