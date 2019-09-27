/**
 * clases
 */
export class Square{
    private posA: number;
    private posB: number;
    private side: number;
    public constructor(pA:number,pB:number,sid:number){
        this.posA = pA;
        this.posB = pB;
        this.side = sid;
    } 
    public setPosA(pA:number):void{
        this.posA=pA;
    }
    public getPosA():number{
        return this.posA;
    }
    public setPosB(pB:number):void{
        this.posB=pB;
    }
    public getPosB():number{
        return this.posB;
    }
    public setSide(sid:number):void{
        this.side=sid;
    }
    public getSide():number{
        return this.side;
    }
    public getArea():number{
        let area:number=this.side*this.side
        return area;
    }
    public getPerimeter():number{
        let perimeter:number=this.side*4
        return perimeter;
    }

}
let square1: Square=new Square(7,8,5);
console.log(square1);
let areaSquare1:number=square1.getArea();
console.log(areaSquare1);
let perimeterSquare1:number=square1.getPerimeter();
console.log(perimeterSquare1);








 /**
  * Pruebas
  */