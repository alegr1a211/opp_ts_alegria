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
export class Cancion {
    private nombreCancion: string;
    private genero: string;
    private autor: string;
    public constructor(nombreCancion: string, genero: string, autor: string) {
        this.nombreCancion = nombreCancion;
        this.genero = genero;
        this.autor = autor;
    }
}
export class Cd {
    private canciones: Cancion[];
    private contador: number;
    public constructor() {
        this.canciones = [];
        this.contador = 0;
    }
    public agregarListaCanciones(canciones: Cancion): void {
        this.canciones.push(canciones);
        this.contador++;

    }
    public darCancion(posiCancion: number): Cancion {
        return this.canciones[posiCancion];

    }
    public grabarCancion(canciones: Cancion, contador: number): Cancion {
        return this.canciones[contador] =canciones;
    }
}
let cancion1: Cancion = new Cancion('Sabor Sabor', 'cumbia', 'Los Bibis');
let cancion2: Cancion = new Cancion('Rata Blanca', 'Rock', 'James');
let cancion3: Cancion = new Cancion('son de amores', 'baladas romanticas', 'andy y lucas');
let cd1: Cd = new Cd();
cd1.agregarListaCanciones(cancion1);
cd1.agregarListaCanciones(cancion2);
cd1.agregarListaCanciones(cancion3);
/*console.log(cd1);*/
console.log(cd1.darCancion(0));
console.log(cd1.grabarCancion(cancion2,1));




