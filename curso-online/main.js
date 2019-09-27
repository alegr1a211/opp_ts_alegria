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
    function Curso(nom, prec, descr, doc) {
        this.nombre = nom;
        this.precio = prec;
        this.descripcion = descr;
        this.docente = doc;
    }
    return Curso;
}());
exports.Curso = Curso;
var Docente = /** @class */ (function () {
    function Docente(nom, ape, corr, profs, dir) {
        this.nombre = nom;
        this.apellido = ape;
        this.correo = corr;
        this.profesion = profs;
        this.direccion = dir;
    }
    return Docente;
}());
exports.Docente = Docente;
var Estudiante = /** @class */ (function () {
    function Estudiante(nom, ape, corr, direc) {
        this.nombre = nom;
        this.apellido = ape;
        this.correo = corr;
        this.direccion = direc;
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
    return CompraCurso;
}());
exports.CompraCurso = CompraCurso;
var direccion1 = new Direccion("Cbba", "Obrero", "Colquiri");
console.log(direccion1);
var docente1 = new Docente("Edwin", "Calla", "edc@gmail.com", "Maestria", direccion1);
console.log(docente1);
var curso1 = new Curso("Fundamentos", 150, "curso acelerado", docente1);
console.log(curso1);
var curso2 = new Curso("Variables", 180, "tener minimo conocimiento", Docente);
console.log(curso2);
var curso3 = new Curso("teoria", 120, "bastante lectura", Docente);
console.log(curso3);
var curso4 = new Curso("Node.js", 150, "minimo conocimiento en javascript", Docente);
console.log(curso4);
var curso5 = new Curso("Typescript", 200, "capacidad de analizar", Docente);
console.log(curso5);
var estudiante1 = new Estudiante("Franz", "Ventura", "fr@gmail.com", direccion1);
console.log(estudiante1);
var estudiante2 = new Estudiante("Verito", "Patiño", "ver@gmail.com", []);
console.log(estudiante2);
var estudiante3 = new Estudiante("Jhonny", "Paz", "jh@gmail.com", []);
console.log(estudiante3);
var estudiante4 = new Estudiante("Juan", "Meneces", "jm@gmail.com", []);
console.log(estudiante4);
var estudiante5 = new Estudiante("Sahori", "Medina", "sm@gmail.com", []);
console.log(estudiante5);
var estudiante6 = new Estudiante("Cristian", "Montaño", "cm@gmail.com", []);
console.log(estudiante6);
var estudiante7 = new Estudiante("Dorian", "Nuñez", "db@gmail.com", []);
console.log(estudiante7);
var estudiante8 = new Estudiante("Favian", "Centellas", "fc@gmail.com", []);
console.log(estudiante8);
var estudiante9 = new Estudiante("Camila", "Quiroga", "cq@gmail.com", []);
console.log(estudiante9);
var estudiante10 = new Estudiante("Marco", "Miranda", "mm@gmail.com", []);
console.log(estudiante10);
