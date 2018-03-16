
import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';

import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


// ng2-charts
import { ChartsModule } from 'ng2-charts';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

// Pipe Module
import { PipesModule } from '../pipes/pipes.module';

import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medicos/medico.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { BibliografiaComponent } from './personal/bibliografia/bibliografia.component';
import { DocumentosComponent } from './personal/documentos/documentos.component';
import { InvestigacionesComponent } from './personal/investigaciones/investigaciones.component';
import { NoticiasComponent } from './personal/noticias/noticias.component';
import { ProyectosComponent } from './personal/proyectos/proyectos.component';
import { ComunicacionesComponent } from './e-secretaria/comunicaciones/comunicaciones.component';
import { FormacionComponent } from './e-secretaria/formacion/formacion.component';
import { GestionComponent } from './e-secretaria/gestion/gestion.component';
import { TecnicasComponent } from './e-secretaria/tecnicas/tecnicas.component';
import { GestionDocumentosComponent } from './admon/gestion-documentos/gestion-documentos.component';
import { GestionNoticiasComponent } from './admon/gestion-noticias/gestion-noticias.component';
import { GestionProyectosComponent } from './admon/gestion-proyectos/gestion-proyectos.component';

@NgModule({
    declarations: [
        // PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficoDonaComponent,
        AccoutSettingsComponent,
        PromesasComponent,
        RxjsComponent,
        ProfileComponent,
        UsuariosComponent,
        // ModalUploadComponent,
        HospitalesComponent,
        MedicosComponent,
        MedicoComponent,
        BusquedaComponent,
        BibliografiaComponent,
        DocumentosComponent,
        InvestigacionesComponent,
        NoticiasComponent,
        ProyectosComponent,
        ComunicacionesComponent,
        FormacionComponent,
        GestionComponent,
        TecnicasComponent,
        GestionDocumentosComponent,
        GestionNoticiasComponent,
        GestionProyectosComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports: [
        CommonModule,
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule,
        PipesModule
    ]
})
export class PagesModule { }
