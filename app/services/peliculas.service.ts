import { Injectable, ElementRef } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import "rxjs/add/operator/map";
import {Observable} from 'rxjs/Rx';
import {Busqueda} from "../model/busqueda";
import {Pelicula} from "../model/pelicula";
import { URLSearchParams } from "@angular/http";

@Injectable()
export class PeliculasService{

	constructor(private _http: Http){
	}


	getPeliculas(){
		return this._http.get("http://localhost:8082/film/newest/5")
			.map(res => res.json());
	}

	getGenres(){
		return this._http.get("http://localhost:8082/genre")
			.map(res => res.json());
	}

	getPeliculasBusqueda(busqueda: Busqueda, page: number, max_per_page: number){
		var genList = "title=" + busqueda.name + "&";
		for (let entry of busqueda.genres) {
			genList += "genres=" + entry + "&";
		}
		genList +="page="+page;
		genList += "&max_per_page="+max_per_page;

		return this._http.get("http://localhost:8082/film?"+genList)
			.map(res => res.json());       
	}

	getPeliculaById(id){
		return this._http.get("http://localhost:8082/film/"+id)
			.map(res => res.json()); 
	}

	eliminarPeliculaById(id){
		return this._http.delete("http://localhost:8082/film/"+id)
			.map(res => res.json()); 
	}
    
    getGenresById(id){
            return this._http.get("http://localhost:8082/film/"+id)
				.map(res => res.json()); 
    }
    
}
