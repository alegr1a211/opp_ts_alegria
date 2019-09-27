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
    private curso:Curso;
    private estudiante:Estudiante;
    private fecha:string;
    public constructor(cur:Curso,est:Estudiante,fec:string){
        this.curso=cur;
        this.estudiante=est;
        this.fecha=fec;
    }
}
let direccion1: Direccion=new Direccion("Cbba","Obrero","Colquiri");
console.log(direccion1);
let docente1: Docente=new Docente("Edwin","Calla","edc@gmail.com","Maestria",direccion1)
console.log(docente1);
let curso1: Curso=new Curso("Fundamentos",150,"curso acelerado",docente1);
console.log(curso1);
let curso2: Curso= new Curso("Variables",180,"tener minimo conocimiento",Docente);
console.log(curso2);
let curso3: Curso= new Curso("teoria",120,"bastante lectura",Docente);
console.log(curso3);
let curso4: Curso= new Curso("Node.js",150,"minimo conocimiento en javascript",Docente);
console.log(curso4);
let curso5: Curso= new Curso("Typescript",200,"capacidad de analizar",Docente);
console.log(curso5);

let estudiante1: Estudiante=new Estudiante("Franz","Ventura","fr@gmail.com",direccion1);
console.log(estudiante1);
let estudiante2: Estudiante= new Estudiante("Verito","Patiño","ver@gmail.com",[]);
console.log(estudiante2);
let estudiante3: Estudiante=new Estudiante("Jhonny","Paz","jh@gmail.com",[]);
console.log(estudiante3);
let estudiante4: Estudiante=new Estudiante("Juan","Meneces","jm@gmail.com",[]);
console.log(estudiante4);
let estudiante5: Estudiante=new Estudiante("Sahori","Medina","sm@gmail.com",[]);
console.log(estudiante5);
let estudiante6: Estudiante=new Estudiante("Cristian","Montaño","cm@gmail.com",[]);
console.log(estudiante6);
let estudiante7: Estudiante=new Estudiante("Dorian","Nuñez","db@gmail.com",[]);
console.log(estudiante7);
let estudiante8: Estudiante=new Estudiante("Favian","Centellas","fc@gmail.com",[]);
console.log(estudiante8);
let estudiante9: Estudiante=new Estudiante("Camila","Quiroga","cq@gmail.com",[]);
console.log(estudiante9);
let estudiante10: Estudiante=new Estudiante("Marco","Miranda","mm@gmail.com",[]);
console.log(estudiante10);





