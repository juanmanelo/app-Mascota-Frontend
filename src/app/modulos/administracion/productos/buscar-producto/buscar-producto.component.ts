import { Component, OnInit } from '@angular/core';
import { ModeloDatos } from 'src/app/modelos/datos.modelos';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-buscar-producto',
  templateUrl: './buscar-producto.component.html',
  styleUrls: ['./buscar-producto.component.css']
})
export class BuscarProductoComponent implements OnInit {

listadoRegistros: ModeloProducto[] = [];

  constructor(private productosServicio: ProductoService) { }

  ngOnInit(): void {
    this.ObtenerListadoProducto();
  }

  ObtenerListadoProducto(){
    this.productosServicio.ObtenerRegistros().subscribe((datos: ModeloProducto[]) =>{
      this.listadoRegistros = datos;
    })

  }

}
