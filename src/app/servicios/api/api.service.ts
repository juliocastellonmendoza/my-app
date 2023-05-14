import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ListaUserI} from '../../modelos/listaUser.interface';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "https://jsonplaceholder.typicode.com/todos/";

  constructor(private http:HttpClient) { }

  getAllUsers(page: number):Observable<ListaUserI[]>{

    let direccion = this.url + "?page=" + page;
    return this.http.get<ListaUserI[]>(direccion);

  }

  getBuscarPorId(buscar: number):Observable<ListaUserI[]>{
    let direccion = this.url + "?buscar=" + buscar;
    return this.http.get<ListaUserI[]>(direccion, {params:{buscar:buscar}});
  }

}
