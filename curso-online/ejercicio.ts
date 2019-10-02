export abstract class  FigurasGeometricas{
    //public ancho:number;
    //public alto:number;
    public constructor(public ancho:number,public alto:number){
        this.ancho=ancho;
        this.alto=alto;
    }
    getAncho():number{
        return this.ancho;
    }
    getAlto():number{
        return this.alto;
    }
    public abstract getArea():number;
}

export class Rectangulo extends FigurasGeometricas{
    public largo:number;
    public constructor(public ancho:number,public alto:number,largo:number){
        super(ancho,alto);
        this.largo=largo;
    }
     getArea():number{
         let resultado=this.alto*this.ancho
         return resultado;
    }
    getVolumen():number{
        let resultado=this.alto*this.ancho*this.largo
        return resultado;
    }
    }

export class Triangulo extends FigurasGeometricas{
    public largo:number;
    public constructor(public ancho:number,public alto:number,largo:number){
        super(ancho,alto);
        this.largo=largo;
    }
    getArea():number{
        let resultado=this.ancho*this.alto*0.5
        return resultado;
    }
    getVolumen():number{
        let resultado=this.ancho*this.largo*this.alto/3
        return resultado;
    }
}
let rectangulo1: Rectangulo= new Rectangulo(10,15,9);
console.log(rectangulo1);
let triangulo1: Triangulo= new Triangulo(20,25,18);
console.log(triangulo1);
console.log(rectangulo1.getArea()+' Area');
console.log(triangulo1.getArea()+' Area');
console.log(rectangulo1.getVolumen()+' Volumen');
console.log(triangulo1.getVolumen()+' Volumen');
