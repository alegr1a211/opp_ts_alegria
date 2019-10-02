/*export abstract class Operacion{
    private a:number;
    private b:number;
    public constructor(a:number,b:number){
        this.a=a;
        this.b=b;
    public abstract int Operacion;suma(a:number,b:number){
        return (a+ b);
    }
    //public Operacion.resta(a:number,b:number){
        //return (a - b);
    }
    }*/

    export abstract class Animal{
        public molestar():void{
            console.log('yo molesto'+'jugando');
        }
        public abstract hacerRuido():void
    }
    export  class Perro extends Animal{
          public hacerRuido():void{
              console.log('....');
          }

    }
    export class Gato extends Animal{
        public hacerRuido():void{
            console.log('miau');
        }

    }
function hacerRuido(animal,Animal):void{
    animal.hacerRuido();
}    
let perro = new Perro();
let gato = new Gato();
console.log('perro');
hacerRuido(perro,gato);
perro.molestar();
console.log('tan bonito');