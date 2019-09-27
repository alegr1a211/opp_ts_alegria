/**crea una clase cuenta con los metodos ingreso, reintegro 
 * y transferencia. La clase contendra un constructor con parametros
 * y los metodos getters y setters.
 */
export class Cuenta{
    private saldo:number;
    public constructor(sald:number){
        this.saldo=sald;
    }
    public getIngreso():number{
        return this.saldo;
    }
    public getTransferencia():number{
        return this.saldo;
    }
    public getReintegro():number{
        return this.saldo;
    }
}
let cuentaBCP: Cuenta=new Cuenta(0);
console.log(cuentaBCP);

