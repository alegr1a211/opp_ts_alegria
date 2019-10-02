export class Fruta{
    private nombre:string;
    private temporada:string;
    private vitamina:string;
    public constructor(nom:string,temp:string,vit:string){
        this.nombre=nom;
        this.temporada=temp;
        this.vitamina=vit;
    }
}
export class Mandarina extends Fruta{
    private color:string;
    private precio:number;
    private crecimiento:string;
    public constructor(nom:string,temp:string,vit:string,color:string,prec:number,crec:string){
        super(nom, temp, vit);
        this.color=color;
        this.precio=prec;
        this.crecimiento=crec;
    }
}
export class Manzana extends Fruta{
    private color:string;
    private precio:number;
    private crecimiento:string;
public constructor(nom:string,temp:string,vit:string,colr:string,pre:number,crec:string){
    super(nom,temp,vit);
    this.color=colr;
    this.precio=pre;
    this.crecimiento=crec;
}
}
export class Sandia extends Fruta{
    private color:string;
    private precio:number;
    private crecimiento:string;
    public constructor(nom:string,temp:string,vit:string,col:string,prec:number,crec:string){
        super(nom,temp,vit);
        this.color=col;
        this.precio=prec;
        this.crecimiento=crec;
    }
}
let fruta1: Fruta = new Mandarina('mandarina1','frio','vitC.antioxidante','anaranjado',8,'arboles');
console.log(fruta1);
let fruta2: Fruta = new Manzana('manzana1','enero','vitE.vitC','rojo',10,'arboles');
console.log(fruta2);
let fruta3: Fruta = new Sandia('sandia1','primavera','vitA.B6','verde',12,'sobre tierra');
console.log(fruta3);

var resultado:boolean = fruta1 instanceof Fruta;
console.log(resultado);
//var resultado1:boolean = Manzana instanceof Fruta;
//console.log(resultado1);
var resultado2: boolean = fruta3 instanceof Sandia;
console.log(resultado2);
//var resultado3:boolean = Sandia instanceof Sandia;
//console.log(resultado3);
//var resultado4: boolean = Mandarina instanceof Sandia;
//console.log(resultado4);


