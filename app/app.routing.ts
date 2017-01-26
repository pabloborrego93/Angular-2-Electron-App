import { NgModule }       from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FootComponent } from './shared/foot/foot.component';

import { HomeComponent } from './components/home/home.component';
import { InsertarComponent } from './components/insertar/insertar.component';
import { ListadoComponent } from './components/listado/listado.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { EditarComponent } from './components/editar/editar.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'insertar', component: InsertarComponent },
  { path: 'listado', component: ListadoComponent },
    { path: 'editar/:id', component: EditarComponent },
  { path: 'pelicula/:id', component: PeliculaComponent }
];

/*export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);*/
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRouting {}
