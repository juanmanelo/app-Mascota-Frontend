import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloEmpleado } from 'src/app/modelos/empleado.modelo';
import { EmpleadoService } from 'src/app/servicios/empleado.service';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'nombre': ['',[Validators.required]],
    'apellido': ['',[Validators.required]],
    'fechaIngreso': ['',[Validators.required]],
    'cargo': ['',[Validators.required]],
    'departamento': ['',[Validators.required]],
    'correo': ['',[Validators.required]],
    'clave': ['',[Validators.required]],
    'celular': ['',[Validators.required]],
    'comision': ['',[Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private servicioEmpleado: EmpleadoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  GuardarEmpleado(){
    let nombre = this.fgValidador.controls["nombre"].value;
    let apellido = this.fgValidador.controls["apellido"].value;
    let fechaIngreso = this.fgValidador.controls["fechaIngreso"].value;
    let cargo = this.fgValidador.controls["cargo"].value;
    let departamento = this.fgValidador.controls["departamento"].value;
    let correo = this.fgValidador.controls["correo"].value;
    let clave = this.fgValidador.controls["clave"].value;
    let celular = this.fgValidador.controls["celular"].value;
    let comision = this.fgValidador.controls["comision"].value;
    let e= new ModeloEmpleado();
    e.nombre=nombre;
    e.apellido=apellido;
    e.fechaIngreso=fechaIngreso;
    e.cargo=cargo;
    e.departamento=departamento;
    e.correo=correo;
    e.clave=clave;
    e.celular=celular;
    e.comision=comision;
    this.servicioEmpleado.CrearEmpleado(e).subscribe((datos:ModeloEmpleado) =>{
      alert("Empleado almacenando Correctamente");
      this.router.navigate(["/administracion/listar-empleado"]);
    }, (error: any) => {
      alert("Error almacenando el Empleado");
    })
  }


}

