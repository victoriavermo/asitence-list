import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LogueadoService } from '../../services/logueado/logueado.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  // email: string;
  // password: string;
  hide:boolean = true;
  formData: FormGroup;
  pipeVar = 'HOLA';

  constructor(private route: Router,
              private snackbar: MatSnackBar,
              private logueado: LogueadoService,
              private fb: FormBuilder
              ){}

  ngOnInit(){

    const email = [{value: '',disabled:false},[
                  Validators.required,
                  Validators.email]
                  ];
    const password = [{value: '',disabled:false},[
                      Validators.required,
                      Validators.minLength(3),
                      Validators.maxLength(7),
                      Validators.pattern('^[^.]+$')]
                     ];
    const config = { email, password };

    this.formData = this.fb.group(config);
  }

  //PAra el ngIf
  get email(){ return this.formData.get('email') }
  get password(){ return this.formData.get('password') }

  login(){


  // TENGO QUE COMPROBAR SI EL EMAIL Y EL PASSWORD COINCIDEN
  if ( (this.formData.get('email').value ==='victoriavermo@gmail.com') && this.formData.get('password').value === '1234') {
    // SI COINCIDEN ENTRA AQUI
    this.route.navigateByUrl('admin');
    this.logueado.setEstado(true);
    }else{
      this.logueado.setEstado(false)
      /// SI NO COINCIDEN ENTRA AQUI
      this.snackbar.open('Email o password incorrectos', 'OK', {
      panelClass: ['errorSnackbar']
    })
  }

    /*if(this.email && this.password){
      if(this.email ==='victoriavermo@gmail.com' && this.password ==='1234'){
        //console.log('HAY UN EMAIL Y UN PASSWORD');
        this.route.navigateByUrl("admin");
        this.logueado.setEstado(true);

      }else{
        this.logueado.setEstado(false);
        //console.log('FALTA EMAIL O PASSWORD')
        this.snackbar.open('Email o Password incorrecto','OK', {
          panelClass: ['errorSnackbar']
          });

      }
    }else{
      this.logueado.setEstado(false);
      this.snackbar.open('Falta Email o Password','OK', {
        panelClass: ['errorSnackbar']
        });
    }*/

  }

}
