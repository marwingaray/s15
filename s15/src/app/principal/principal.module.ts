import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { EventoComponent } from './evento/evento.component';
import { RetoComponent } from './reto/reto.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InterpolacionComponent,
    EventoComponent,
    RetoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    RetoComponent,
  ]
})
export class PrincipalModule { }
