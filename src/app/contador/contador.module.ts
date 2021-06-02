import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';

import { ContadorComponent } from './contador/contador.component';


@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports:[
        ContadorComponent
    ],
    //Cosas que sean visibles afuera de ese modulo
    imports: [
        CommonModule
    ]
})

export class ContadorModule{

}


