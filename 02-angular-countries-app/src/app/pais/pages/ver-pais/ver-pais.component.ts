import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from "rxjs/operators";
import { Country } from '../../interfaces/pais-interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor( private activateRoute: ActivatedRoute, private paisService: PaisService) { }

  //Con activateRoute nos subscribimos a los cambios en la url
  ngOnInit(): void {

    this.activateRoute.params
    .pipe(
      //Debe retornar un Observable
      switchMap( (params) => this.paisService.getPaisPorCodigo(params['id'])),
      //Se ejecuta a continuación
      tap( console.log )
    )
    .subscribe( pais => {
      this.pais = pais[0];
    });

    /*
    this.activateRoute.params
    .subscribe( ({ id }) => {
      console.log(id);
      this.paisService.getPaisPorCodigo(id)

      .subscribe( pais => {
          console.log(pais);
      });

    });
    */
  }

}
