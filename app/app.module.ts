import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FootComponent } from './shared/foot/foot.component';

import { HomeComponent } from './components/home/home.component';
import { InsertarComponent } from './components/insertar/insertar.component';
import { ListadoComponent } from './components/listado/listado.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { EditarComponent } from './components/editar/editar.component';

const routes: Routes = [

];

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		ReactiveFormsModule,
		AppRouting,
		RouterModule.forRoot(routes, { useHash: true })
	],
	declarations: [
		AppComponent,
		NavbarComponent,
		FootComponent,
		HomeComponent,
		InsertarComponent,
		ListadoComponent,
        EditarComponent,
		PeliculaComponent
	],
	bootstrap: [ AppComponent, NavbarComponent, FootComponent ]
})
export class AppModule {
}
