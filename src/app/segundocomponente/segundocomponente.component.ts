import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundocomponente',
  templateUrl: './segundocomponente.component.html',
  styleUrls: ['./segundocomponente.component.css']
})
export class SegundocomponenteComponent implements OnInit {

  variableBooleana = true;
  varNumero = 5;
  varArray: number[];


  constructor() { }

  ngOnInit() {
    this.varArray = [3, 4, 5];
  }

}
