/* tslint:disable:variable-name */
import { Injectable } from '@angular/core';
import {Usuario} from '../Models/usuario.model';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  private _usuarios: Usuario[];
  private _usuarios$ = new Subject<Usuario[]>();

  constructor() {
    this._usuarios = [];
  }

  public getUsuarios(): Usuario[] {
    // this._usuarios.push(new Usuario('adrian', 'adrian', 'orellana', 'perez', 31));
    return this._usuarios;
  }

  public getUsuarios$(): Observable<Usuario[]> {
    return this._usuarios$.asObservable();
  }

  nuevoUsuario(): Usuario {
    return  new Usuario(null, null, null, null, null);
  }

  agregaUsuario(usuario: Usuario) {
    this._usuarios.push(usuario);
    this._usuarios$.next(this._usuarios);
  }
}
