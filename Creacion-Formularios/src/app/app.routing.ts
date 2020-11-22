 //IMPORT NECESARIOS
 import{ModuleWithProviders} from '@angular/core';
 import{Routes,RouterModule} from'@angular/router';
import { from } from 'rxjs';


 //IMPORTAR COMPONENTES
 import {MenuFormulariosComponent} from 'src/app/components/menu-formularios/menu-formularios.component';
 import {FromularioCreado1Component} from 'src/app/components/fromulario-creado1/fromulario-creado1.component';
 import{FormulariosCreado2Component} from 'src/app/components/formularios-creado2/formularios-creado2.component';
 import {FormularioCreado3Component} from 'src/app/components/formulario-creado3/formulario-creado3.component';
 import {FormularioDesde0Component} from 'src/app/components/formulario-desde0/formulario-desde0.component';
import { AppComponent } from './app.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { DesarolladoresComponent } from './components/desarolladores/desarolladores.component';


 const appRoutes: Routes=[
     {path:'', component:HomeComponent},
     {path:'home', component:HomeComponent},
     {path:'menu-formulario', component:MenuFormulariosComponent},
     {path:'formularionuevo', component:FormularioDesde0Component},
     {path:'formulariouno', component:FromularioCreado1Component},
     {path:'formulariodos', component:FormulariosCreado2Component},
     {path:'formulariotres', component:FormularioCreado3Component},
     {path: 'desarolladores', component:DesarolladoresComponent},
     {path:'**', component:ErrorComponent},
 ];

 export const appRoutingProviders: any[]=[];
 export const routing: ModuleWithProviders<any>=RouterModule.forRoot(appRoutes);
