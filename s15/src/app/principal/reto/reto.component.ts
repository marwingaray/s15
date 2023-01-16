import { Component } from '@angular/core';

@Component({
  selector: 'app-reto',
  templateUrl: './reto.component.html',
  styleUrls: ['./reto.component.css']
})
export class RetoComponent {
  title = "Reto sesion 15";
  mostrar = true;
  ocultar = false;

  Generar() {
    if (this.mostrar)
      this.mostrar = false;
    else
      this.mostrar = true;
  }

  //  Generar1(){
  //   if(this.ocultar){
  //     this.ocultar = false;
  //   }else{
  //     this.ocultar = true;
  //   }
  // }

  texto: string = "xxxxxxxxxxx";
}
