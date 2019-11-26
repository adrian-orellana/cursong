import { Component, OnInit } from '@angular/core';
import {Usuario} from '../Models/usuario.model';
import {Observable, Subscription} from 'rxjs';
import {FormularioService} from '../Services/formulario.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})


export class FormularioComponent implements OnInit {
  public usuarios: Usuario[];
  public usuarios$: Observable<Usuario[]>;
  public usuariosSuscripcion: Subscription;
  public usuario: Usuario;

  constructor(private formularioService: FormularioService) { }

  ngOnInit() {
    this.usuarios = this.formularioService.getUsuarios();
    this.usuarios$ = this.formularioService.getUsuarios$();
    this.usuariosSuscripcion = this.usuarios$.subscribe(usuarios => this.usuarios = usuarios);
    this.usuario = this.formularioService.nuevoUsuario();
  }

  public nuevo(): void {
    this.formularioService.agregaUsuario(this.usuario); // Grabo el usuario
    this.usuario = this.formularioService.nuevoUsuario(); // limpio el objeto para el siguiente
  }

}
