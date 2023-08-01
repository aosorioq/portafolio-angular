import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';
import { ProductoDescripcion } from '../interfaces/producto-descripcion.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  //bandera de cargando
  cargando=true;
  productos: Producto[] = [];
  productoFiltrado:Producto[]=[];

  constructor(private http: HttpClient ) { 

    this.cargarProductos();
  }

  private cargarProductos() {

      return new Promise <void>( (resolve, reject )  => {
        
        this.http.get<any>('https://angular-html-18157-default-rtdb.firebaseio.com/productos_idx.json')
          .subscribe((resp: Producto[]) => {
            this.productos = resp;
            this.cargando = false;
            resolve(void 0);
          });
      
      });

  
  }
  getProducto (id: string): Observable<ProductoDescripcion> {  

    return this.http.get<ProductoDescripcion>(`https://angular-html-18157-default-rtdb.firebaseio.com/productos/${ id }.json`);
    
  }
    buscarProducto(termino:string) {


      if( this.productos.length === 0) {
          //cargar productos
          this.cargarProductos().then( () => {
           // ejecutar despues de tener los productos
           // aplicar filtro  
           this.filtrarProductos( termino);  

          });
      } else {
        //aplicar el filtro
        this.filtrarProductos(termino);
      }

     
    }

    private filtrarProductos ( termino:string ) { 

      //console.log(this.productos);
      this.productoFiltrado =[];

      termino = termino.toLowerCase ();

      this.productos.forEach( prod => {

        const tituloLower = prod.titulo.toLocaleLowerCase();

        if( prod.categoria.indexOf (termino) >= 0  || tituloLower.indexOf (termino) >=0 ) {
           this.productoFiltrado.push (prod) ;

        }

         
      });


    }

  }
