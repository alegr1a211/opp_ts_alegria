export class Circle{
    private circun:number;
    private radio:number;
    public constructor(cir:number,rad:number){
        this.circun=cir;
        this.radio=rad;
    }
    public setCircun(cir:number):void{
        this.circun=cir;
    }
    public getCircun():number{
        return this.circun;
    }
    public setRadio(rad:number):void{
        this.radio=rad;
    }
    public getRadio():number{
        return this.radio;
    }
    public getArea():number{
        let area:number=3.141592654*this.radio*this.radio
        return area;
    }
    public getPerimeter():number{
        let perimeter:number=this.circun
        return perimeter;
    }
}
let circle1: Circle=new Circle()
let areaCircle1:number= circle1.getArea();
console.log(areaCircle1);