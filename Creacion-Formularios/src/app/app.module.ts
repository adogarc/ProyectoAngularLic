import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{routing,appRoutingProviders} from './app.routing';


import { AppComponent } from './app.component';
import { MenuFormulariosComponent } from './components/menu-formularios/menu-formularios.component';
import { FormularioDesde0Component } from './components/formulario-desde0/formulario-desde0.component';
import { FromularioCreado1Component } from './components/fromulario-creado1/fromulario-creado1.component';
import { FormulariosCreado2Component } from './components/formularios-creado2/formularios-creado2.component';
import { FormularioCreado3Component } from './components/formulario-creado3/formulario-creado3.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    MenuFormulariosComponent,
    FormularioDesde0Component,
    FromularioCreado1Component,
    FormulariosCreado2Component,
    FormularioCreado3Component
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
