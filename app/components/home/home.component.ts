import { Component, OnInit } from '@angular/core';
import {PeliculasService} from '../../services/peliculas.service';

@Component({
  selector: 'home',
  templateUrl: './app/components/home/home.component.html',
  providers: [PeliculasService]
})
export class HomeComponent implements OnInit {
  public peliculas;

  constructor(private _peliculasService: PeliculasService) { 

  }

  ngOnInit(){
		this.getPeliculas();
	}

	getPeliculas(){
		this._peliculasService.getPeliculas().subscribe(
			result =>{
				this.peliculas = result.content;
			},
			error => {
				console.log(<any>error);
			}
		);
	}
	
}
