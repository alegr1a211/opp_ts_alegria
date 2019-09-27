import { Square } from "./practica";

export class Triangle{
    private base:number;
    private height:number;
    public constructor(ba:number,hei:number){
        this.base=ba;
        this.height=hei;
    }
    public setBase(ba:number):void{
        this.base=ba;
    }
    public getBase():number{
        return this.base;
    }
    public setHeight(hei:number):void{
        this.height=hei;
    }
    public getHeight():number{
        return this.height;
    }
    public getArea():number{
        let area:number=0.5*this.base*this.height
        return area;
    }
    public getPerimeter():number{
        let perimeter:number=this.base*3
        return perimeter;
    }
}
let triangle1: Triangle=new Triangle(10,10);
console.log(triangle1);
let areaTriangle1:number=triangle1.getArea();
console.log(areaTriangle1);
let perimeterTriangle1:number=triangle1.getPerimeter();
console.log(perimeterTriangle1);
