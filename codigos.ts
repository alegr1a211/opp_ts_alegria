class auto{
    color: string;
    ruedas: number;
    puertas: number;
    marca: string;
    modelo: string;
    constructor(_color:string, _ruedas:number, _puertas:number, _marca:string, _modelo:string){
this.color = _color;
this.ruedas = _ruedas;
this.puertas = _puertas;
this.marca = _marca;
this.modelo = _modelo;
    }
}
let movilidad:auto = new auto("morado",4,5,"Ford","antigüo");
console.log(movilidad);




