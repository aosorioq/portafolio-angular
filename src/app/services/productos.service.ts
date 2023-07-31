import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  //bandera de cargando
  cargando=true;
  productos: Producto[] = [];

  constructor(private http: HttpClient ) { 

    this.cargarProductos();
  }

  private cargarProductos() {
  
  this.http.get<any>('https://angular-html-18157-default-rtdb.firebaseio.com/productos_idx.json')
    .subscribe((resp: Producto[]) => {

      console.log(resp);
      this.productos = resp;
      this.cargando = false;

    });
  }
  
}

