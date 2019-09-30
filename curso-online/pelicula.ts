/**
 * Resuelva el siguiente problema usando programacion orientada objetos y herencia:
 * se necesita implementar un sistema para la venta de peliculas en formatos cd, dvd,
 * blu-ray. Donde debe estar involucrado el cliente.
 * se debe guardar cds, dvds, blue-rays en una misma lista.
 * Se debe poder calcular el monto total percibido por la venta de dvds.
 * Se debe poder calcular el monto total percibido por la venta de cds.
 * Se debe poder calcular el monto total percibido por la venta de blu-rays.
 * Se debe poder calcular el monto total percibido por la venta de cds, dvds y blue-ray.
 * los 3 tipos de discos deben guardar en una lista.
 */
export class Tienda{
    private nombre:string;
    private cliente:string;
    private productos:Array<ListProductos>;
    public constructor(nom:string,cli:string){
        this.nombre=nom;
        this.cliente=cli;
        this.productos=[];
    }
    public getProductos():ListProductos{
        return this.productos.push('dvds','cds','blu-ray');
    }
    public ProductosListProductos(ProductosVendidos:ListProductos):void{

    }
}

/*export class Tienda{
    private cliente:string;
    private precio:number;
    public constructor(clie:string){
        this.cliente=clie;
    }
    precioProducto(dinero:number){
        this.precio=dinero;
    }
}
export class Producto extends Tienda{
    constructor()
}
}