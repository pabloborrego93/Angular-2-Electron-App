import {Component, ElementRef, OnInit } from '@angular/core';
import {Pelicula} from "../../model/pelicula";
import {PeliculasService} from '../../services/peliculas.service';
import {Router, ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'editar',
  templateUrl: './app/components/editar/editar.component.html',
  providers: [PeliculasService]
})

export class EditarComponent implements OnInit {
  public pelicula: Pelicula;
  public generos;

  constructor(
        private _peliculasService: PeliculasService,
		private _route: ActivatedRoute,
		private _router: Router,
		private _http: Http
	){}

  ngOnInit(){
        this.getGeneros();
		this.pelicula = new Pelicula("", [], 0, "", "");
        this.getPelicula();
  }
    
    getGeneros(){
        this._peliculasService.getGenres().subscribe(
            result =>{ this.generos = result; },
            error => { console.log(<any>error); });
    }
    
    getPelicula(){
		this._route.params.forEach((params: Params) => {
            let id = params["id"];
		this._peliculasService.getPeliculaById(id).subscribe(
			result =>{
				this.pelicula = result;
			},
			error => {
				console.log(<any>error);
			}
		);
	   });
	}
    
    onChange(event) {
      var files = event.srcElement.files;
            this._route.params.forEach((params: Params) => {
                let id = params["id"];
            var url = "id=" + id + "&";
      url += "title=" + this.pelicula.title + "&";
            url+= "description=" + this.pelicula.description + "&";
            if(this.pelicula.genre != undefined)
             for (let p of this.pelicula.genre) {
                 url += "genre=" + p + "&";
             }
            url = url.substring(0, url.length-1); 
            let formData: FormData = new FormData();
      formData.append('file', files[0], files[0].name);  
      return this._http.put("http://localhost:8082/film?"+url, formData).map(res => res.json()).subscribe();
            });                   
     }
}
