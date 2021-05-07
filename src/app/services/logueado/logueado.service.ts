import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogueadoService {

  private estoyLogueado:boolean = false;

  constructor() {

  }

  //GETTER -> Devolver dato/estado
  getEstado(){
    //Devolver el dato: estoyLogueado
    return this.estoyLogueado;
  }

  //SETTER -> Etablecer dato/estado
  setEstado(estado:boolean){
    this.estoyLogueado = estado;
  }

}
