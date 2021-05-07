import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LogueadoService } from '../../services/logueado/logueado.service';


@Injectable({
  providedIn: 'root'
})
export class IsLogueadoGuard implements CanActivate {

  //Para utilizar el servicio necesitamos crear un constructor con el servicio:
  constructor(private logueado: LogueadoService){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      //Si esta logueado return true si no lo esta return false.
      return this.logueado.getEstado();

      /*
      if(this.logueado.getEstado()){
        return true;
      }else{
        return true;
      }*/

  }

}
