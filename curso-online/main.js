"use strict";
exports.__esModule = true;
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
var Curso = /** @class */ (function () {
    function Curso(nom, prec, descr) {
        this.nombre = nom;
        this.precio = prec;
        this.descripcion = descr;
        this.docente = [];
    }
    Curso.prototype.getPrecio = function () {
        return this.precio;
    };
    return Curso;
}());
exports.Curso = Curso;
var Docente = /** @class */ (function () {
    function Docente(nom, ape, corr, profs) {
        this.nombre = nom;
        this.apellido = ape;
        this.correo = corr;
        this.profesion = profs;
        this.direccion = [];
    }
    return Docente;
}());
exports.Docente = Docente;
var Estudiante = /** @class */ (function () {
    function Estudiante(nom, ape, corr) {
        this.nombre = nom;
        this.apellido = ape;
        this.correo = corr;
        this.direccion = [];
    }
    return Estudiante;
}());
exports.Estudiante = Estudiante;
var Direccion = /** @class */ (function () {
    function Direccion(ciu, bar, ca) {
        this.ciudad = ciu;
        this.barrio = bar;
        this.calle = ca;
    }
    return Direccion;
}());
exports.Direccion = Direccion;
var CompraCurso = /** @class */ (function () {
    function CompraCurso(cur, est, fec) {
        this.curso = cur;
        this.estudiante = est;
        this.fecha = fec;
    }
    CompraCurso.prototype.getCurso = function () {
        return this.curso;
    };
    return CompraCurso;
}());
exports.CompraCurso = CompraCurso;
var PlataformaEducativa = /** @class */ (function () {
    function PlataformaEducativa(nom) {
        this.nombre = nom;
        this.registro = [];
    }
    PlataformaEducativa.prototype.getNombre = function () {
        return this.nombre;
    };
    PlataformaEducativa.prototype.RegistrarCompraCurso = function (CursoComprado) {
        this.registro.push(CursoComprado);
    };
    PlataformaEducativa.prototype.calGananciaTotal = function () {
        var total = 0;
        for (var _i = 0, _a = this.registro; _i < _a.length; _i++) {
            var compracurso = _a[_i];
            var curso = compracurso.getCurso();
            total += curso.getPrecio();
        }
        return total;
    };
    return PlataformaEducativa;
}());
exports.PlataformaEducativa = PlataformaEducativa;
var direccion1 = new Direccion("Cbba", "Obrero", "Colquiri");
console.log(direccion1);
var docente1 = new Docente("Edwin", "Calla", "edc@gmail.com", "Maestria");
console.log(docente1);
var curso1 = new Curso("Fundamentos", 150, "curso acelerado");
console.log(curso1);
var curso2 = new Curso("Variables", 180, "tener minimo conocimiento");
console.log(curso2);
var curso3 = new Curso("teoria", 120, "bastante lectura");
console.log(curso3);
var curso4 = new Curso("Node.js", 150, "minimo conocimiento en javascript");
console.log(curso4);
var curso5 = new Curso("Typescript", 200, "capacidad de analizar");
console.log(curso5);
/*let estudiante1: Estudiante=new Estudiante("Franz","Ventura","fr@gmail.com",direccion1);
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
console.log(estudiante10);*/
