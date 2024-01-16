import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports:[
    SidebarComponent  //Para poder usarlo en app-component
  ],
  imports: [
    CommonModule,
    RouterModule  //Importamos de app module
  ]
})
export class SharedModule { }
