import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import {UsuariosService} from '../services/usuarios.service'
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router:Router,private authService:AutenticacionService,private usuarioService:UsuariosService) { }
  user ={
    username:null,
    password:null,
    role:null,
  }


  rolUser ="";
  userName="";
  permiso:boolean;
  permisoAdmin:boolean;
  ngOnInit(): void {

   this.rolUser=this.authService.getRolUser();
   this.userName=this.authService.getUserName();

   if(this.rolUser=="cajero"){
      this.permiso=false;
      this.permisoAdmin=true;
   }else{
     this.permiso=true;
     this.permisoAdmin=false;
   }


  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['login']);
   }


}
