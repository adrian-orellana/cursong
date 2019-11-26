import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PrimercomponenteComponent} from './primercomponente/primercomponente.component';
import {SegundocomponenteComponent} from './segundocomponente/segundocomponente.component';
import {TercercomponenteComponent} from './tercercomponente/tercercomponente.component';
import {CuartocomponenteComponent} from './cuartocomponente/cuartocomponente.component';
import {CuartounocomponenteComponent} from './cuartounocomponente/cuartounocomponente.component';
import {ObscomponentComponent} from './obscomponent/obscomponent.component';
import {FormularioComponent} from './formulario/formulario.component';


const routes: Routes = [
  {path: 'primero', component: PrimercomponenteComponent},
  {path: 'segundo', component: SegundocomponenteComponent},
  {path: 'tercer', component: TercercomponenteComponent},
  {path: 'cuarto', component: CuartocomponenteComponent},
  {path: 'obs', component: ObscomponentComponent},
  {path: 'formulario', component: FormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
