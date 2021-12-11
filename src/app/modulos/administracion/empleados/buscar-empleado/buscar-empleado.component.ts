import { Component, OnInit } from '@angular/core';
import { ModeloDatos } from 'src/app/modelos/datos.modelos';
import { ModeloEmpleado } from 'src/app/modelos/empleado.modelo';
import { EmpleadoService } from 'src/app/servicios/empleado.service';

@Component({
  selector: 'app-buscar-empleado',
  templateUrl: './buscar-empleado.component.html',
  styleUrls: ['./buscar-empleado.component.css']
})
export class BuscarEmpleadoComponent implements OnInit {

listadoRegistros: ModeloEmpleado[] = [];

  constructor(private empleadosServicio: EmpleadoService) { }

  ngOnInit(): void {
    this.ObtenerListadoEmpleado();
  }

  ObtenerListadoEmpleado(){
    this.empleadosServicio.ObtenerRegistros().subscribe((datos: ModeloEmpleado[]) =>{
      this.listadoRegistros = datos;
    })

  }

}
