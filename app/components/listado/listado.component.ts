import { Component, OnInit } from '@angular/core';
import {Pelicula} from "../../model/pelicula";
import {Busqueda} from "../../model/busqueda";
import {Genero} from "../../model/genero";
import {Router, ActivatedRoute, Params } from '@angular/router';
import {PeliculasService} from '../../services/peliculas.service';

@Component({
	selector: 'listado',
	templateUrl: './app/components/listado/listado.component.html',
	styleUrls: ['./app/components/listado/listado.component.css'],
	providers: [PeliculasService]
})

export class ListadoComponent implements OnInit {
	public status: string;
	public errorMessage;
	public peliculas;
	public generos;
	public busqueda: Busqueda;
	//Paginacion
	public totalPages;
	public totalElements;
	public page;
	public max_per_page;

	constructor(
		private _peliculasService: PeliculasService,
		private _route: ActivatedRoute,
		private _router: Router
	){}

	ngOnInit(){
		this.getGeneros();
		this.page = 0;
		this.max_per_page = 3;
		this.busqueda = new Busqueda("",[]);
		this.obtenerPagina();
	}
	
	obtenerPagina(){
		this._peliculasService.getPeliculasBusqueda(this.busqueda, this.page, this.max_per_page).subscribe(
			result =>{
				this.totalPages = result.totalPages;
				this.totalElements = result.totalElements;
				this.peliculas = result.content;
			},
			error => {
				console.log(<any>error);
			}
		);
	}
	
	nuevaBusqueda(){
		this.page = 0;
		this.obtenerPagina();
	}
	
	siguientePagina(){
		if((this.page+1) < this.totalPages) {
			this.page += 1;
			this.obtenerPagina();
		}
	}
	
	anteriorPagina(){
		if((this.page-1) >= 0) {
			this.page -= 1;
			this.obtenerPagina();
		}
	}
	
	primeraPagina(){
		if(this.page != 0) {
			this.page = 0;
			this.obtenerPagina();
		}
	}
	
	ultimaPagina(){
		if(this.page != this.totalPages-1) {
			this.page = this.totalPages-1;
			this.obtenerPagina();
		}
	}
	
	paginasde3() {
		if(this.max_per_page != 3) {
			this.page = 0;
			this.max_per_page = 3;
			this.obtenerPagina();
		}
	}
	
	paginasde5() {
		if(this.max_per_page != 5) {
			this.page = 0;
			this.max_per_page = 5;
			this.obtenerPagina();
		}
	}
	
	paginasde10() {
		if(this.max_per_page != 10) {
			this.page = 0;
			this.max_per_page = 10;
			this.obtenerPagina();
		}
	}
	
	getGeneros(){
		this._peliculasService.getGenres().subscribe(
			result =>{ this.generos = result; },
			error => { console.log(<any>error); });
	}
}
