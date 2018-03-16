import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';

// borrar
import { DashboardComponent } from './dashboard/dashboard.component';
// import { ProgressComponent } from './progress/progress.component';
// import { Graficas1Component } from './graficas1/graficas1.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
// import { PromesasComponent } from './promesas/promesas.component';
// import { RxjsComponent } from './rxjs/rxjs.component';



// Guards
import { LoginGuardGuard } from '../services/service.index';
import { AdminGuard } from '../services/service.index';

import { UsuariosComponent } from './usuarios/usuarios.component';
// import { HospitalesComponent } from './hospitales/hospitales.component';
// import { MedicosComponent } from './medicos/medicos.component';
// import { MedicoComponent } from './medicos/medico.component';

import { BusquedaComponent } from './busqueda/busqueda.component';
import { VerificaTokenGuard } from '../services/guards/verifica-token.guard';

// Personal
import { ProfileComponent } from './profile/profile.component';

import { InvestigacionesComponent } from '../pages/personal/investigaciones/investigaciones.component';
import { DocumentosComponent } from '../pages/personal/documentos/documentos.component';
import { NoticiasComponent } from '../pages/personal/noticias/noticias.component';
import { ProyectosComponent } from '../pages/personal/proyectos/proyectos.component';
import { BibliografiaComponent } from '../pages/personal/bibliografia/bibliografia.component';

// eSecretaria
import { GestionComponent } from '../pages/e-secretaria/gestion/gestion.component';
import { FormacionComponent } from '../pages/e-secretaria/formacion/formacion.component';
import { ComunicacionesComponent } from '../pages/e-secretaria/comunicaciones/comunicaciones.component';
import { TecnicasComponent } from '../pages/e-secretaria/tecnicas/tecnicas.component';

// Admon
import { GestionDocumentosComponent } from '../pages/admon/gestion-documentos/gestion-documentos.component';
import { GestionProyectosComponent } from '../pages/admon/gestion-proyectos/gestion-proyectos.component';
import { GestionNoticiasComponent } from '../pages/admon/gestion-noticias/gestion-noticias.component';


const pagesRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [ VerificaTokenGuard ],
        data: { titulo: 'Dashboard' }
    },
    // { path: 'progress', component: ProgressComponent, data: { titulo: 'ProgressBars' } },
    // { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Gráficas' } },
    // { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' } },
    // { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' } },

    { path: 'account-settings', component: AccoutSettingsComponent, data: { titulo: 'Ajustes de Tema' } },
    { path: 'perfil', component: ProfileComponent, data: { titulo: 'Perfil de usuario' } },
    { path: 'busqueda/:termino', component: BusquedaComponent, data: { titulo: 'Buscador' } },

    // Mantenimientos
    {
        path: 'usuarios',
        component: UsuariosComponent,
        canActivate: [ AdminGuard ],
        data: { titulo: 'Mantenimiento de Usuarios' }
    },

    // { path: 'hospitales', component: HospitalesComponent, data: { titulo: 'Mantenimiento de Hospitales' } },
    // { path: 'medicos', component: MedicosComponent, data: { titulo: 'Mantenimiento de Médicos' } },
    // { path: 'medico/:id', component: MedicoComponent, data: { titulo: 'Actualizar Médico' } },

   // Personal
   { path: 'investigaciones', component: InvestigacionesComponent, data: { titulo: 'Investigaciones' } },
   { path: 'documentos', component: DocumentosComponent, data: { titulo: 'Documentos en general' } },
   { path: 'noticias', component: NoticiasComponent, data: { titulo: 'Noticias' } },
   { path: 'proyectos', component: ProyectosComponent, data: { titulo: 'Proyectos' } },
   { path: 'bibliografia', component: BibliografiaComponent, data: { titulo: 'Bibliografía' } },

   // eSecretaria
   { path: 'gestion', component: GestionComponent, data: { titulo: 'Área administratica y económica' } },
   { path: 'formacion', component: FormacionComponent, data: { titulo: 'Formación (Capacity building)' } },
   { path: 'comunicaciones', component: ComunicacionesComponent, data: { titulo: 'Comunicación y difusión' } },
   { path: 'tecnicas', component: TecnicasComponent, data: { titulo: 'Área técnica' } },

   // Admon
   { path: 'gestiondocumentos', component: GestionDocumentosComponent, data: { titulo: 'Gestión de documentos' } },
   { path: 'gestionproyectos', component: GestionProyectosComponent, data: { titulo: 'Gestión de proyectos' } },
   { path: 'gestionnoticias', component: GestionNoticiasComponent, data: { titulo: 'Gestión de noticias' } },

   // root
   { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
