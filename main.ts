export class Bar{
    nombre: string;
    capacidad: number;
    constructor(nom:string,cap:number){
        this.nombre = nom;
        this.capacidad = cap;
    }
}


export class BarMan{
    nombre: string;
    apellido: string;
    constructor(nomb:string, apellid:string){
        this.nombre = nomb;
        this.apellido = apellid;
    }
}


export class trago{
    nombre: string;
    color: string;
    cantidad: number;
    constructor(nombr:string,colr:string,cant:number){
        this.nombre = nombr;
        this.color = colr;
        this.cantidad = cant;
    }
}
let Bar1: Bar = new Bar("Nueva era",50);
let Bar2: Bar = new Bar("Oasis",150);
let BarMan1: BarMan = new BarMan("Bookie","Meneces");
let BarMan2: BarMan = new BarMan("Diego","Paz");
let trago1: trago = new trago("Fernet","negro",200);
let trago2: trago = new trago("Patron Cafe","negro",150);
console.log(Bar1);
console.log(Bar2);
console.log(BarMan1);
console.log(BarMan2);
console.log(trago1);
console.log(trago2);
