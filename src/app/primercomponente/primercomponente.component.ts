import { Component, OnInit } from '@angular/core';

interface Persona {
  nombre: string;
  apellidos: string;
  edad?: number;
}

export class CPersona {
  constructor(nombre: string, apellidos: string, edad: number) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
  }

  nombre: string;
  apellidos: string;
  edad?: number;
}

@Component({
  selector: 'app-primercomponente',
  templateUrl: './primercomponente.component.html',
  styleUrls: ['./primercomponente.component.css']
})
export class PrimercomponenteComponent implements OnInit {

  variable: number;
  varibleCadena: string;
  variableArray: number[];
  varPersona: Persona;
  varCPersona: CPersona;



constructor() {
    this.variable = 1;
    this.varibleCadena = '2';
    this.variableArray = [
      12, 1, 5
    ];
    this.varPersona = {
      nombre: 'daniel',
      apellidos: 'apel',
      edad: 1
    };
    this.varCPersona = new CPersona('Adrian', 'Orellana', 0);
  }

ngOnInit() {
}

verNombre() {
  return this.varCPersona.nombre;
}

  cambiarNombre(event) {
    console.log(event);
    this.varCPersona.nombre = event;
  }

  cambiarApellido(event) {
    console.log(event);
    this.varCPersona.apellidos = event;
  }
}
