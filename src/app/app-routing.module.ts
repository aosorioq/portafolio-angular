import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';

const app_routes: Routes = [
{path: 'home', component:PortafolioComponent },
//ésto es para el buscador
{path: 'item/:id', component:ItemComponent},
{path: 'search/:termino' ,component:SearchComponent},
{path: 'about', component:AboutComponent},
{path: '**', pathMatch:'full',  redirectTo:'home'},
];


@NgModule({
  imports: [RouterModule.forRoot(app_routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
