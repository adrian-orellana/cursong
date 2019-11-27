import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimercomponenteComponent } from './primercomponente/primercomponente.component';
import { SegundocomponenteComponent } from './segundocomponente/segundocomponente.component';
import { TercercomponenteComponent } from './tercercomponente/tercercomponente.component';
import { CuartocomponenteComponent } from './cuartocomponente/cuartocomponente.component';
import { CuartounocomponenteComponent } from './cuartounocomponente/cuartounocomponente.component';
import {FormsModule} from '@angular/forms';
import { ObscomponentComponent } from './obscomponent/obscomponent.component';
import {MatIconModule, MatMenuModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { UsuarioApiComponent } from './usuario-api/usuario-api.component';
import {UsuarioApiService} from './Services/usuario-api.service';

@NgModule({
  declarations: [
    AppComponent,
    PrimercomponenteComponent,
    SegundocomponenteComponent,
    TercercomponenteComponent,
    CuartocomponenteComponent,
    CuartounocomponenteComponent,
    ObscomponentComponent,
    UsuarioApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    UsuarioApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
