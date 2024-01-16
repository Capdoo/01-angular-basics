import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';



@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports:[
        ListadoComponent
    ],
    //Cosas que sean visibles afuera de ese modulo
    imports: [
        CommonModule
    ]
})

export class HeroesModule{
    
}


