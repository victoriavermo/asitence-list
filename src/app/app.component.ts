import { Component } from '@angular/core';
//Importacion del Servicio Firestone -> Permite la connectividad con la BBDD.
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lista-angular';


  //SERVICIO -> Se instancia en el constructor (private db: AngularFirestore) Para hacer toasters, alert, conexion con BBDD, etc.
  constructor(private db: AngularFirestore, private route: Router) {
    const prueba = this.db.collection('prueba').valueChanges();
    prueba.subscribe(console.log);
  }
  ngOnInit(){
    
  }

  login(){
    this.route.navigateByUrl("login");
    // this.flag = false;
  }

  exit(){
    this.route.navigateByUrl("home");
  }



}
