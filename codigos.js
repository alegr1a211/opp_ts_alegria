var auto = /** @class */ (function () {
    function auto(_color, _ruedas, _puertas, _marca, _modelo) {
        this.color = _color;
        this.ruedas = _ruedas;
        this.puertas = _puertas;
        this.marca = _marca;
        this.modelo = _modelo;
    }
    return auto;
}());
var movilidad = new auto("morado", 4, 5, "Ford", "antigüo");
console.log(movilidad);
