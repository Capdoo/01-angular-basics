import { Component} from '@angular/core';
import { ɵHAMMER_PROVIDERS__POST_R3__ } from '@angular/platform-browser';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})



export class ListadoComponent{
 
  heroes: string[] = ['Spiderman','Ironman','Hulk','Tor','Captain America'];
  posicion: number= this.heroes.length;

  heroeBorrado: string="";
  seleccion: boolean=false;


  aux: string[]= [];

  //Eliminacion desde el inicio
  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
  }

  //Eliminacion desde el final
/*
  borrarHeroe(){
    console.log(this.posicion);
    this.posicion -=1;

    let aux:string[] = [];

    for(var i=0;i<this.posicion;i++){
        aux[i] = this.heroes[i];
        this.heroeBorrado = aux[i];
    }

    this.heroes = aux;

    this.seleccion = this.confirmarBorrado();

  }

  confirmarBorrado(): boolean {
    if(this.heroes.length>0){
      return true;
    }else{
      return false;
    }
  }
*/
  

}
