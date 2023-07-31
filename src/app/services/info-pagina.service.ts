import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info?: InfoPagina;
  cargada=false;

  //aqui
  equipo:any[]=[];
  resp=false;
  


  constructor( private http: HttpClient) { 
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo(){
    //Leer el archivo JSON
    this.http.get<InfoPagina>('assets/data/data-pagina.json')
        .subscribe( (resp:InfoPagina) => {
          this.cargada = true;
          this.info = resp;
          });
  }

  private cargarEquipo() {
    //la base de datos firebase
    this.http.get('https://angular-html-18157-default-rtdb.firebaseio.com/equipo.json')
    .subscribe( (resp:any) => {
      this.equipo = resp as any[];
      //console.log(resp);
    });
    
  }


}
