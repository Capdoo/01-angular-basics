import { Component } from "@angular/core";

//Definir el decorador
@Component({
    //Usualmente es la misma palabra del componente sin la palabra component
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})


export class HeroeComponent{
    nombre: string = 'Ironman';
    edad: number = 45;

    get nombreCapitalizado():string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre():string {
        return ` ${this.nombre}-${this.edad}`;
    }

    cambiarNombre():void {
        this.nombre = "Spiderman";

    }

    cambiarEdad():void {
        this.edad = 30;
    }
}