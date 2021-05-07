import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-listado-rol',
  templateUrl: './listado-rol.component.html',
  styleUrls: ['./listado-rol.component.css']
})
export class ListadoRolComponent implements OnInit {

  @Output() rol = new EventEmitter();

  rolesArray = ['Jugador','Árbrito','Entrenador','Otros'];
  selectedItem = 'Jugador';

  constructor() { }

  ngOnInit(): void {
    //Emitimos que por defecto la seleccion es Jugador
    this.rol.emit(this.selectedItem);
  }

  onChange(ev){
    console.log('EV',ev);
    //Emitimos que ha cambiado la seleccion de rol
    this.rol.emit(ev);

  }

}
