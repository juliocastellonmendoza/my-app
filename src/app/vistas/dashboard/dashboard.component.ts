import { Component, OnInit} from '@angular/core';
import {ApiService} from '../../servicios/api/api.service';
import {Router} from '@angular/router';

import {ListaUserI} from '../../modelos/listaUser.interface';
import {ListaSeleI} from '../../modelos/listaSelect.interface';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

// var n:number=0;

export class DashboardComponent implements OnInit{
  
  buscar: string = '';
  users: ListaUserI[] = [];
  pag: ListaSeleI[]= [
    {
      n:'5',
      v:5
    },
    {
      n:'10',
      v:10
    },
    {
      n:'15',
      v:15
    },
    {
      n:'20',
      v:20
    },
    {
      n:'25',
      v:25
    },
    {
      n:'30',
      v:30
    },
  ];
  pageSize = 5;

//Otra forma para Seleccionar cantidad para mostrar colocando esto (change)="changePaginas($event)" en la etiqueta select
//    changePaginas(e:any){
//      console.log(e.target.value)
//      this.pageSize=e.target.value;
//    }

  desde:number = 0;
  hasta:number = this.pageSize;

  constructor( private api:ApiService, private router:Router){
    
  }

  filterget='';

  ngOnInit(): void {

      this.api.getAllUsers(10).subscribe(data =>{
        this.users=data;
      })
      
  }

  cambiarPagina(e:PageEvent){
    
    this.desde = e.pageIndex * e.pageSize;
    this.hasta = this.desde + e.pageSize;

  }



}
