/**
 * se necesita resolver el siguiente problema usando programacion 
 * orientada a objetos. Se desea realizar un sistema de venta de 
 * cursos online como por ejemplo Udemy, Platzi, etc.
 * Para ello se necesita interactuar con estudiantes,profesores
 * de los mismos, se necesita registrar su informacion basica como 
 * nombre, apellido, correo; por otra parte se necesita interactuar 
 * con los cursos que se impartiran de los mismos se necesita
 * registrar su precio,nombre, descripcion; finalmente se desea
 * guardar el registro de los estudiantes que compraron algun curso.
 * Un estudiante o profesor puede tener una o mas direcciones,
 *  al mismo tiempo una direccion esta compuesta por la siguiente 
 * informacion: ciudad, barrio,calle.
 * Para los profesores en particular se necesita guardar su profesion.
 */
export class Curso{
    private nombre:string;
    private precio:number;
    private descripcion:string;
    private docente:Docente;
    public constructor(nom:string,prec:number,descr:string,doc:Docente){
        this.nombre=nom;
        this.precio=prec;
        this.descripcion=descr;
        this.docente=doc;
    }
}
export class Docente{
    private nombre:string;
    private apellido:string;
    private correo:string;
    private profesion:string;
    private direccion:Direccion;
    public constructor(nom:string,ape:string,corr:string,profs:string,dir:Direccion){
        this.nombre=nom;
        this.apellido=ape;
        this.correo=corr;
        this.profesion=profs;
        this.direccion=dir;

    }
} 
export class Estudiante{
    private nombre:string;
    private apellido:string;
    private correo:string;
    private direccion:Direccion;
    public constructor(nom:string,ape:string,corr:string,direc:Direccion){
        this.nombre=nom;
        this.apellido=ape;
        this.correo=corr;
        this.direccion=direc;
    }
}
export class Direccion{
    private ciudad:string;
    private barrio:string;
    private calle:string;
    public constructor(ciu:string,bar:string,ca:string){
        this.ciudad=ciu;
        this.barrio=bar;
        this.calle=ca;
    }
}
export class CompraCurso{
    private curso:string;
    private estudiante:Estudiante;
    private fecha:string;
    public constructor(cur:string,est:Estudiante,fec:string){
        this.curso=cur;
        this.estudiante=est;
        this.fecha=fec;
    }
}
