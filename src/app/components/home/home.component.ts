import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private route: Router) {

  }

  // flag:boolean = false;

  // //SERVICIO -> Se instancia en el constructor (private db: AngularFirestore) Para hacer toasters, alert, conexion con BBDD, etc.
  // constructor(private db: AngularFirestore, private route: Router) {
  //   const prueba = this.db.collection('prueba').valueChanges();
  //   prueba.subscribe(console.log);
  // }
  ngOnInit(){
    // this.flag = true;
  }

  login(){
    this.route.navigateByUrl("login");
    // this.flag = false;
  }

  listado(){
    this.route.navigateByUrl("formulario");
    // this.flag = false;
  }

}
