import {Component, ElementRef, OnInit } from '@angular/core';
import {Pelicula} from "../../model/pelicula";
import {PeliculasService} from '../../services/peliculas.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
	selector: 'insertar',
	templateUrl: './app/components/insertar/insertar.component.html',
	providers: [PeliculasService]
})

export class InsertarComponent implements OnInit {
	public pelicula: Pelicula;
	public generos;
	public file;
	
	constructor(
		private _peliculasService: PeliculasService,
		private _http: Http
	){}
	
	onChange(event) {
		var files = event.srcElement.files;
		var url = "title=" + this.pelicula.title + "&";
        url+= "description=" + this.pelicula.description + "&";
        for (let p of this.pelicula.genre) {
            url += "genre=" + p + "&";
        }
        url = url.substring(0, url.length-1); 
        let formData: FormData = new FormData();
		formData.append('file', files[0], files[0].name);		
		return this._http.post("http://localhost:8082/film?"+url, formData).map(res => res.json()).subscribe();
	}
	
	ngOnInit(){
		this.getGeneros();
		this.pelicula = new Pelicula("", [], 0, "", "");
	}

	getGeneros(){
		this._peliculasService.getGenres().subscribe(
			result =>{ this.generos = result; },
			error => { console.log(<any>error); });
	}

}
