import { Injectable } from '@angular/core';
import { DataEmpleado } from '../models/empleado';
@Injectable({
  providedIn: 'root'
})
export class DummydataService {

  constructor() { }


  empleados(){
    var dataEmpleado :  DataEmpleado [] =  [
      {nombre : "Juan Carlos", apellido : "Ferrero", cursosRestantes : 5,  fechaHasta : "20/04/2023"},
      {nombre : "Maria", apellido : "Perez", cursosRestantes : 1,  fechaHasta : "20/04/2023"},
      {nombre : "Tobias", apellido : "Tribello", cursosRestantes : 3,  fechaHasta : "20/04/2023"},
      {nombre : "Isabel", apellido : "Álvarez", cursosRestantes : 2,  fechaHasta : "20/04/2023"},
      {nombre : "Lucas", apellido : "Gonetti", cursosRestantes : 1,  fechaHasta : "20/04/2023"},
      {nombre : "Teresa", apellido : "Gimenez", cursosRestantes : 1,  fechaHasta : "20/04/2023"},
      {nombre : "Joaquín", apellido : "Versalles", cursosRestantes : 2,  fechaHasta : "20/04/2023"},
      {nombre : "Martina", apellido : "Lichterfelde", cursosRestantes : 1,  fechaHasta : "20/04/2023"},
      {nombre : "Lucas", apellido : "Gonetti", cursosRestantes : 1,  fechaHasta : "20/04/2023"},
      {nombre : "Teresa", apellido : "Gimenez", cursosRestantes : 1,  fechaHasta : "20/04/2023"},
      {nombre : "Joaquín", apellido : "Versalles", cursosRestantes : 2,  fechaHasta : "20/04/2023"},
      {nombre : "Martina", apellido : "Lichterfelde", cursosRestantes : 1,  fechaHasta : "20/04/2023"},
      {nombre : "Lucas", apellido : "Gonetti", cursosRestantes : 1,  fechaHasta : "20/04/2023"},
      {nombre : "Teresa", apellido : "Gimenez", cursosRestantes : 1,  fechaHasta : "20/04/2023"},
      {nombre : "Joaquín", apellido : "Versalles", cursosRestantes : 2,  fechaHasta : "20/04/2023"},
      {nombre : "Martina", apellido : "Lichterfelde", cursosRestantes : 1,  fechaHasta : "20/04/2023"},
      {nombre : "Lucas", apellido : "Gonetti", cursosRestantes : 1,  fechaHasta : "20/04/2023"},
      {nombre : "Teresa", apellido : "Gimenez", cursosRestantes : 1,  fechaHasta : "20/04/2023"},
      {nombre : "Joaquín", apellido : "Versalles", cursosRestantes : 2,  fechaHasta : "20/04/2023"},
      {nombre : "Maria", apellido : "Perez", cursosRestantes : 1,  fechaHasta : "20/04/2023"},
      {nombre : "Tobias", apellido : "Tribello", cursosRestantes : 3,  fechaHasta : "20/04/2023"},
      {nombre : "Isabel", apellido : "Álvarez", cursosRestantes : 2,  fechaHasta : "20/04/2023"},
      {nombre : "Lucas", apellido : "Gonetti", cursosRestantes : 1,  fechaHasta : "20/04/2023"},
      {nombre : "Teresa", apellido : "Gimenez", cursosRestantes : 1,  fechaHasta : "20/04/2023"},
      {nombre : "Joaquín", apellido : "Versalles", cursosRestantes : 2,  fechaHasta : "20/04/2023"},
      {nombre : "Martina", apellido : "Lichterfelde", cursosRestantes : 1,  fechaHasta : "20/04/2023"},
      {nombre : "Lucas", apellido : "Gonetti", cursosRestantes : 1,  fechaHasta : "20/04/2023"},
      {nombre : "Maria", apellido : "Perez", cursosRestantes : 1,  fechaHasta : "20/04/2023"},
      {nombre : "Tobias", apellido : "Tribello", cursosRestantes : 3,  fechaHasta : "20/04/2023"},
      {nombre : "Isabel", apellido : "Álvarez", cursosRestantes : 2,  fechaHasta : "20/04/2023"},
      {nombre : "Lucas", apellido : "Gonetti", cursosRestantes : 1,  fechaHasta : "20/04/2023"},
      {nombre : "Teresa", apellido : "Gimenez", cursosRestantes : 1,  fechaHasta : "20/04/2023"},
      {nombre : "Joaquín", apellido : "Versalles", cursosRestantes : 2,  fechaHasta : "20/04/2023"},
      {nombre : "Martina", apellido : "Lichterfelde", cursosRestantes : 1,  fechaHasta : "20/04/2023"},
      {nombre : "Lucas", apellido : "Gonetti", cursosRestantes : 1,  fechaHasta : "20/04/2023"},
      {nombre : "Martina", apellido : "Lichterfelde", cursosRestantes : 1,  fechaHasta : "20/04/2023"},
      {nombre : "Lucas", apellido : "Martinez Waldi", cursosRestantes : 1,  fechaHasta : "20/04/2023"}
  ];
    return dataEmpleado;
  }


}


