import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { IniciosesionComponent } from './paginas/iniciarsesion/iniciarsesion.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { PagoComponent } from './paginas/pago/pago.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { NotFoundComponent } from './paginas/not-found/not-found.component';
import { SobrenosotrosComponent } from './paginas/sobrenosotros/sobrenosotros.component';
import { CatalogoComponent } from './paginas/catalogo/catalogo.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'iniciar-sesion', component: IniciosesionComponent },
  { path: 'sobre-nosotros', component: SobrenosotrosComponent },
  { path: 'catalogo', component: CatalogoComponent },
  {path: 'contacto', component: ContactoComponent},
  { path: 'pago', component: PagoComponent },
  { path: 'registro', component: RegistroComponent },
  {
    path: 'detalle/:id',
    loadComponent: () =>
      import('./paginas/detalle-producto/detalle-producto.component').then(
        m => m.DetalleProductoComponent
      )
  },
  { path: '**', component: NotFoundComponent }
];
