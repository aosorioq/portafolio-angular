import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/services/productos.service';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit{

  producto!: ProductoDescripcion;  
  id!: string;



  constructor ( private route: ActivatedRoute,
                public productoService: ProductoService )  {}

  ngOnInit()  {      
    this.route.params
        .subscribe(parametros => {
          this.productoService.getProducto(parametros['id'])
          .subscribe( (producto: ProductoDescripcion) => {
           // console.log('Datos devueltos por getProducto:', producto);
           this.id = parametros['id']
           this.producto = producto;  
            //console.log(producto);

          });
      
        });
  }
}
