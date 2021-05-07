import { Component, Input, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import Swal from 'sweetalert2';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface Asistente{
  nombre: string;
  telefono: any;
  email: string;
  dni: string;
  jornada: number;
  rol: string;
  id: string;
}
@Component({
  selector: 'app-listado-alumnos',
  templateUrl: './listado-alumnos.component.html',
  styleUrls: ['./listado-alumnos.component.css']
})
export class ListadoAlumnosComponent implements OnInit {
  alumnosArray = [];
  alumnosRef;
  alumnosArrayFiltrado = [];
  @Input() jornada; //el nombre de la directiva podria ir dentro de () si no se pone por defecto coge el nombre del input

  displayedColumns: string[] = [
    'nombre',
    'telefono',
    'email',
    'dni',
    'rol',
    'jornada',
    'id'

  ];

  dataSource;

  @ViewChild(MatSort) sort: MatSort;


  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
  }


  constructor(private db: AngularFirestore) {
    this.alumnosRef = this.db.collection('alumnos'); //Guardamos el canal

  }

  ngOnInit(): void {
    const alumnos = this.db.collection('alumnos').snapshotChanges();

    alumnos.subscribe((res:any)=>{
      const arrayMapped: Asistente[] = res.map((a)=>{
      const data = a.payload.doc.data();
      const id = a.payload.doc.id;
      return {...data, id}
      /*los -> ... -> hacen spread
        {
          nombre,
          dni,
          etc.
        }*/
      })
      this.alumnosArray = arrayMapped;
      this.alumnosArrayFiltrado = this.alumnosArray;
      console.log('ARRAY MAPPED', arrayMapped);
      //this.dataSource = arrayMapped;
      this.filtrar(); //Para que al cargar la pagina filtre
    });


  }

  ngOnChanges(changes:SimpleChanges){
    this.filtrar();
  }

  eliminar(id){
    console.log('ID:',id);
    Swal.fire({
      title: '¿Estás seguro que deseas eliminarlo?',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {

        // QUIERO ELIMINAR A ESTE USUARIO;
        this.alumnosRef.doc(id).delete()
        Swal.fire('Eliminado!', '', 'success')

        }
      })
  }

  filtrar(){
    //this.alumnosArrayFiltrado = this.alumnosArray;

    this.alumnosArrayFiltrado = this.alumnosArray.filter(
      (participante)=>{
        console.log('participante',participante);
        // if(item.data.jornada === this.jornada){
        if(participante.jornada === this.jornada){
          console.log('Entra en el filtro');
          return true;
        }else{
          console.log('No entra en el filtro');
          return false;
        }
      }
    );
    this.dataSource = new MatTableDataSource(this.alumnosArrayFiltrado);
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
