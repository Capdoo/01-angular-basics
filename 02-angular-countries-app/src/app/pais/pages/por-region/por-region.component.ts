import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [ ` 
    button {
      margin-right: 5px;
    }
    `
  ]
})
export class PorRegionComponent implements OnInit {

  //regiones: string[] = ['EU','EFTA','CARICOM','PA','AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC']
  regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  regionActiva: string = '';

  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService:PaisService) { }

  ngOnInit(): void {
  }

  activarRegion( region: string): void{

    //Check if it's the same
    if (this.regionActiva == region) return;

    this.regionActiva = region;
    this.paises = [];

    //TODO: Hacer llamado al servicio
    this.paisService.buscarRegion(this.regionActiva)
      .subscribe(
        data => {
          this.paises = data;
          this.hayError = false;
          console.log(data);
        },
        err => {
          console.log(err);
          this.hayError = true;
        }
      )
  }

  getClaseButton(region: string): string{
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

}
