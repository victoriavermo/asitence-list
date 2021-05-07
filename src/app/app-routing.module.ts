import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ListadoComponent } from './pages/listado/listado.component'
import { AdminComponent } from './pages/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { IsLogueadoGuard } from './guard/isLogueado/is-logueado.guard';


const routes: Routes = [
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'formulario',
    component: ListadoComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [IsLogueadoGuard]
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'bienvenida',
    component: BienvenidaComponent
  },
  //Para rutas erroneas
  {
    path: "**",
    redirectTo: "home",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
