export class Comida{
    private nombre:string;
    private carne:string;
    private papa:string;
    public constructor(nombre:string,carne:string,papa:string){
        this.nombre=nombre;
        this.carne=carne;
        this.papa=papa;
    }
}
export class Puchero extends Comida{
    private aji:string;
    private chuño:string;
    private repollo:string;
    private fruta:string;
    private grano:string;
    public constructor(nombre:string, carne:string, papa:string, aji:string,chuño:string,repollo:string,fruta:string,grano:string){
        super(nombre, carne, papa);
        this.aji=aji;
        this.chuño=chuño;
        this.repollo=repollo;
        this.fruta=fruta;
        this.grano=grano;
    }
}
export class PiqueMacho extends Comida{
    private embutido:string;
    private bebida:string;
    private verdura:string;
    private aji:string;
    private condimento:string;
    public constructor(nombre:string,carne:string,papa:string,embutido:string,bebida:string,verdura:string,aji:string,condimento:string){
        super(nombre, carne, papa);
        this.embutido=embutido;
        this.bebida=bebida;
        this.verdura=verdura;
        this.aji=aji;
        this.condimento=condimento;
    }
}