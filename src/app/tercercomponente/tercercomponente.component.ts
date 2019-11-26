import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tercercomponente',
  templateUrl: './tercercomponente.component.html',
  styleUrls: ['./tercercomponente.component.css']
})
export class TercercomponenteComponent implements OnInit {

  numeroPipe = 121.1212;
  dineroPipe = 12121.334;
  fechaPipe = Date.now();
  objetoPipe = {nombre: 'curso', asistenntes: 12};
  cadenaPipe = 'asdAWgreWEF';

  constructor() { }

  ngOnInit() {
  }

}
