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
let fruta1: Fruta= new Mandarina('mandarina1','frio','vitC.antioxidante','anaranjado',8,'arboles');
console.log(fruta1);
