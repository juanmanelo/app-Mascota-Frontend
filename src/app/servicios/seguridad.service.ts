import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloIdentificar } from '../modelos/identifcar.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  constructor(private http: HttpClient) { }

  Identificar(usuario:string, clave:string):Observable<ModeloIdentificar>{
    return this.http.post<ModeloIdentificar>("localhost:3000/identificarPersona",{
      usuario: usuario,
      clave: clave
    },{
      headers: new HttpHeaders({

      })

    })

  }
}
