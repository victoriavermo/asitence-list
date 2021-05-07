import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { ListadoRolComponent } from './components/listado-rol/listado-rol.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ListadoAlumnosComponent } from './components/listado-alumnos/listado-alumnos.component';
import { JornadasComponent } from './components/jornadas/jornadas.component';
import { HomeComponent } from './components/home/home.component';

//Importación necesaria para que funcione ngModel
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Importaciones de Angular/Material
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';


import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { PipeLowercasePipe } from './pipes/pipeLowercase/pipe-lowercase.pipe';
import { IconoRolPipe } from './pipes/iconoRol/icono-rol.pipe';
// import { AumentarDirective } from './directives/aumentar/aumentar.directive';
import { environment } from '../environments/environment.prod';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListadoComponent,
    ListadoRolComponent,
    AdminComponent,
    ListadoAlumnosComponent,
    JornadasComponent,
    HomeComponent,
    BienvenidaComponent,
    PipeLowercasePipe,
    IconoRolPipe,
    // AumentarDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    // 3. Initialize
    AngularFireModule.initializeApp(environment.config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, BrowserAnimationsModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
