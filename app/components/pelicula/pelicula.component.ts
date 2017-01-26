import { Component, OnInit } from '@angular/core';
import {Pelicula} from "../../model/pelicula";
import {Router, ActivatedRoute, Params } from '@angular/router';
import {PeliculasService} from '../../services/peliculas.service';

@Component({
  selector: 'peliculainf',
  templateUrl: './app/components/pelicula/pelicula.component.html',
  providers: [PeliculasService]
})

export class PeliculaComponent implements OnInit{
	public pelicula: Pelicula;

	constructor(
		private _peliculasService: PeliculasService,
		private _route: ActivatedRoute,
		private _router: Router
	){}
    
	ngOnInit(){
        this.pelicula = new Pelicula("","",0,"","");
        this.getPelicula();
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
    
    eliminarPelicula(){
        this._route.params.forEach((params: Params) => {
            let id = params["id"];
		this._peliculasService.eliminarPeliculaById(id).subscribe(
			result =>{
			},
			error => {
				console.log(<any>error);
			}
		);
	   });
        this._router.navigate(['listado']);
    }
}
