import { Component, OnInit } from '@angular/core';
import {of} from 'rxjs';

@Component({
  selector: 'app-obscomponent',
  templateUrl: './obscomponent.component.html',
  styleUrls: ['./obscomponent.component.css']
})
export class ObscomponentComponent implements OnInit {
  datosAobservar = of(1, 2, 3, 100);
  observador;

  constructor() {
    this.observador = {
      next: x => {
        console.log('Mostramos el valor ' + x);
      },
      error: err => {
        console.log('Mostramos un error');
      },
      complete: () => {
        console.log('Hemos completado los datos');
      }
    };
  }

  ngOnInit() {
    this.datosAobservar.subscribe(this.observador);
  }

}
