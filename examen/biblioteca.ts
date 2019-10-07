export class Documento {
    protected codigo: number;
    protected cantidadDisponibles: number;
    protected cantidadPrestados: number;
    public constructor(codigo: number, cantDisp: number, cantPrest: number) {
        this.codigo = codigo;
        this.cantidadDisponibles = cantDisp;
        this.cantidadPrestados = cantPrest;
    }
}
export class Libro extends Documento {
    private titulo: string;
    private editorial: string;
    private edicion: number;
    private autor: string;
    public constructor(codigo: number, cantDisp: number, cantPrest: number, ti: string, edi: string, edic: number, autor: string) {
        super(codigo, cantDisp, cantPrest);
        this.titulo = ti;
        this.editorial = edi;
        this.edicion = edic;
        this.autor = autor;
    }
    public getAutor(): string {
        return this.autor;
    }
}
export class Revista extends Documento {
    private nombre: string;
    private volumen: number;
    private area: string;
    public constructor(codigo: number, cantDisp: number, cantPrest: number, nom: string, vol: number, area: string) {
        super(codigo, cantDisp, cantPrest);
        this.nombre = nom;
        this.volumen = vol;
        this.area = area;
    }
}
export class Periodico extends Documento {
    private nombre: string;
    private fecha: string;
    private contenido: string;
    public constructor(codigo: number, cantDisp: number, cantPrest: number, nom: string, fec: string, cont: string) {
        super(codigo, cantDisp, cantPrest);
        this.nombre = nom;
        this.fecha = fec;
        this.contenido = cont;
    }
}
export class Lector {
    private nombre: string;
    private apellido: string;
    private ci: string;
    public constructor(nom: string, ape: string, ci: string) {
        this.nombre = nom;
        this.apellido = ape;
        this.ci = ci;
    }
}
export class Prestamo {
    private lector: Lector;
    private documento: Documento;
    private fecha: string;
    public constructor(lector: Lector, documento: Documento, fecha: string) {
        this.lector = lector;
        this.documento = documento;
        this.fecha = fecha;
    }
}
export class Biblioteca {
    private listaPrestamo: Prestamo[];
    private listaDocumentos: Documento[];
    constructor() {
        this.listaPrestamo = [];
    }
    public prestarDocumento(prestamo: Prestamo): void {
        this.listaPrestamo.push(prestamo);
    }
    public buscarLibrosPorAutor(nombreAutor: string): Libro[] {
       let listaLibrosAutorRespuesta : Libro []= [];
        for (let i = 0; i < this.listaDocumentos.length; i++) {
            let documento: Documento = this.listaDocumentos[i];
            if (documento instanceof Libro) {
                if (documento.getAutor() == nombreAutor) {
                    listaLibrosAutorRespuesta.push(documento);
                }
            }
        }
        return listaLibrosAutorRespuesta;
    }
    public devolverDocumento(): void {

    }
}
let bibliotecaMunicipal: Biblioteca = new Biblioteca();
