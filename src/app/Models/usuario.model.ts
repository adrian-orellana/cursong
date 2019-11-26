export class Usuario {
  constructor(login: string, nombre: string, apellido1: string, apellido2: string, edad: number) {
    this.login = login;
    this.apellido1 = apellido1;
    this.apellido2 = apellido2;
    this.nombre = nombre;
    this.edad = edad;
  }

  login: string;
  nombre: string;
  apellido1: string;
  apellido2: string;
  edad: number;
}
