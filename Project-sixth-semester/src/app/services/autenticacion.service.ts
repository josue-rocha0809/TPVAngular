import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  API_URI='http://localhost:3000';

  constructor(private http:HttpClient, private jwtHelper:JwtHelperService) { }


  singin(user:any){
  return this.http.post(`${this.API_URI}/users/singin`,user);
  }

getToken(){
  console.log("token ", localStorage.getItem('token'))
  return localStorage.getItem('token');
}

getRolUser():string {
const token1=this.getToken();
const payload = token1!.split('.')[1];
const values = atob(payload);
const valuesJson = JSON.parse(values);
const rol1 =valuesJson.role;
return rol1;
}

getUserName():string {
  const token1=this.getToken();
  const payload = token1!.split('.')[1];
  const values = atob(payload);
  const valuesJson = JSON.parse(values);
  const userName =valuesJson.username;
  return userName;
  }

  isAuth(){
    const token= localStorage.getItem('token');
   if(this.jwtHelper.isTokenExpired(token!) || !localStorage.getItem('token')){
     return false;
   }
    return true;
  }


}
