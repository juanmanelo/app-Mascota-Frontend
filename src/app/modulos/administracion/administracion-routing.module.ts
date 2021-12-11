import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarClienteComponent } from './clientes/buscar-cliente/buscar-cliente.component';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './clientes/editar-cliente/editar-cliente.component';
import { EliminarClienteComponent } from './clientes/eliminar-cliente/eliminar-cliente.component';
import { BuscarEmpleadoComponent } from './empleados/buscar-empleado/buscar-empleado.component';
import { CrearEmpleadoComponent } from './empleados/crear-empleado/crear-empleado.component';
import { EditarEmpleadoComponent } from './empleados/editar-empleado/editar-empleado.component';
import { EliminarEmpleadoComponent } from './empleados/eliminar-empleado/eliminar-empleado.component';
import { BuscarProductoComponent } from './productos/buscar-producto/buscar-producto.component';
import { CrearProductoComponent } from './productos/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';
import { EliminarProductoComponent } from './productos/eliminar-producto/eliminar-producto.component';
import { BuscarUsuarioComponent } from './usuarios/buscar-usuario/buscar-usuario.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuarios/eliminar-usuario/eliminar-usuario.component';

const routes: Routes = [
  {
    path:"crear-usuario",
    component: CrearUsuarioComponent
  },
  {
    path:"editar-usuario",
    component: EditarUsuarioComponent
  },
  {
    path:"eliminar-usuario",
    component: EliminarUsuarioComponent
  },
  {
    path:"listar-productos",
    component: BuscarProductoComponent
  },
  {
    path:"buscar-usuario",
    component: BuscarUsuarioComponent
  },
  {
    path:"crear-producto",
    component: CrearProductoComponent
  },
  {
    path:"editar-producto/:id",
    component: EliminarProductoComponent
  },
  {
    path:"crear-cliente",
    component: CrearClienteComponent
  },
  {
    path:"editar-cliente",
    component: EditarClienteComponent
  },
  {
    path:"eliminar-cliente",
    component: EliminarClienteComponent
  },
  {
    path:"buscar-cliente",
    component: BuscarClienteComponent
  },
  {
    path:"crear-empleado",
    component: CrearEmpleadoComponent
  },
  {
    path:"listar-empleado",
    component: BuscarEmpleadoComponent
  },
  {
    path:"editar-empleado/:id",
    component: EditarEmpleadoComponent
  },
  {
    path:"eliminar-empleado",
    component: EliminarEmpleadoComponent
  },
  {
    path:"buscar-empleado",
    component: BuscarEmpleadoComponent
  },
  {
    path:"crear-producto",
    component: CrearProductoComponent
  },
  {
    path:"editar-producto",
    component: EditarProductoComponent
  },
  {
    path:"eliminar-producto",
    component: EliminarProductoComponent
  },
  {
    path:"buscar-producto",
    component: BuscarProductoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
