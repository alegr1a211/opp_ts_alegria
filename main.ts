export class Bar {
    nombre: string;
    capacidad: number;
    constructor(nom: string, cap: number) {
        this.nombre = nom;
        this.capacidad = cap;
    }
    public setNombre(nom: string): void {
        this.nombre = nom;
    }
    public getNombre(): string {
        return this.nombre;
    }
    public setCapacidad(cap: number): void {
        this.capacidad = cap;
    }
    public getCapacidad(): number {
        return this.capacidad;
    }
}


export class BarMan {
    nombre: string;
    apellido: string;
    constructor(nomb: string, apellid: string) {
        this.nombre = nomb;
        this.apellido = apellid;
    }
    public setNombre(nomb: string):void {
        this.nombre = nomb;
    }
    public getNombre(): string {
        return this.nombre;
    }
    public setApellido(apellid: string): void {
        this.apellido = apellid;
    }
    public getApellido(): string {
        return this.apellido;
    }
}


export class Trago {
    nombre: string;
    color: string;
    cantidad: number;
    constructor(nombr: string, colr: string, cant: number) {
        this.nombre = nombr;
        this.color = colr;
        this.cantidad = cant;
    }
    public setNombre(nombr: string): void {
        this.nombre = nombr;
    }
    public getNombre(): string {
        return this.nombre;
    }
    public setColor(colr: string): void {
        this.color = colr;
    }
    public getColor(): string {
        return this.color;
    }
    public setCantidad(cant: number): void {
        this.cantidad = cant;
    }
    public getCantidad(): number {
        return this.cantidad;
    }
}
let Bar1: Bar = new Bar("Nueva era", 50);
let Bar2: Bar = new Bar("Oasis", 150);
let BarMan1: BarMan = new BarMan("Bookie", "Meneces");
let BarMan2: BarMan = new BarMan("Diego", "Paz");
let Trago1: Trago = new Trago("Fernet", "negro", 200);
let Trago2: Trago = new Trago("Patron Cafe", "negro", 150);
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