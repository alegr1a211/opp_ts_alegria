/**
 * Clases
 */

export class Rectangle{
    private posX: number;
    private posY: number;
    private height: number;
    private width: number;
    public constructor(px:number,py:number,hei:number,wid:number){
        this.posX = px;
        this.posY = py;
        this.height = hei;
        this.width = wid;
    }
    public setPosX(px:number):void{
        this.posX = px;
    }
    public getPosX():number{
        return this.posX;
    }
    public setPosY(py:number):void{
        this.posY = py;
    }
    public getPosY():number{
        return this.posY;
    }
    public setHeight(hei:number):void{
        this.height = hei;
    }
    public getHeight():number{
        return this.height;
    }
    public setWidth(wid:number):void{
        this.width = wid;
    }
    public getWidth():number{
        return this.width;
    }
    public desplazar(posXnew:number,posYnew:number):void{
        this.posX = posXnew;
        this.posY = posYnew;
    }
    public getArea():number{
        let area:number = this.height*this.width
        return area;
    }
    public getPerimeter():number{
        let perimeter:number = 2*this.height + 2*this.width
        return perimeter;
    }

}

/**
 * Pruebas
 */

let rectangle1:Rectangle = new Rectangle(5,10,8,12);
rectangle1.setPosX(7);
rectangle1.setPosY(12);
rectangle1.setHeight(40);
rectangle1.setWidth(60);
console.log(rectangle1);
rectangle1.desplazar(50,50);
console.log(rectangle1);
let areaRectangle1:number=rectangle1.getArea();
console.log(areaRectangle1);
let perimeter1:number=rectangle1.getPerimeter();
console.log(perimeter1);



//let areaRectangle1:number = rectangle1.getHeight()* rectangle1.getWidth();
//console.log(areaRectangle1);






