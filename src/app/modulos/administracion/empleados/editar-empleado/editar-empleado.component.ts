import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloEmpleado } from 'src/app/modelos/empleado.modelo';
import { EmpleadoService } from 'src/app/servicios/empleado.service';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {
  id:string = '';
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
    private router: Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarEmpleado();
  }

  BuscarEmpleado(){
    this.servicioEmpleado.ObtenerRegistrosPorId(this.id).subscribe((datos: ModeloEmpleado) =>{
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["nombre"].setValue(datos.nombre);
      this.fgValidador.controls["apellido"].setValue(datos.apellido);
      this.fgValidador.controls["fechaIngreso"].setValue(datos.fechaIngreso);
      this.fgValidador.controls["cargo"].setValue(datos.cargo);
      this.fgValidador.controls["departamento"].setValue(datos.departamento);
      this.fgValidador.controls["correo"].setValue(datos.correo);
      this.fgValidador.controls["clave"].setValue(datos.clave);
      this.fgValidador.controls["celular"].setValue(datos.celular);
      this.fgValidador.controls["comision"].setValue(datos.comision);
    });
    
  }

  EditarEmpleado(){
    let nombre = this.fgValidador.controls["nombre"].value;
    let apellido = this.fgValidador.controls["apellido"].value;
    let fechaIngreso = this.fgValidador.controls["fechaIngreso"].value;
    let cargo = this.fgValidador.controls["ncargo"].value;
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
      alert("Empleado actualizado Correctamente");
      this.router.navigate(["/administracion/listar-empleado"]);
    }, (error: any) => {
      alert("Error actualizando el Empleado");
    })
  }



}

