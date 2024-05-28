import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
import { Login } from './login';
import { LoginComponent } from './comp/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl:String="http://localhost:8080";

  


  constructor(private http:HttpClient) { }



  signUp(user:User):Observable<any>{
    return this.http.post(`${this.baseUrl}`+"/signup",user,{responseType:'text'});
  }
  login(login:Login):Observable<any>{
    return this.http.post(`${this.baseUrl}`+"/login",login,{responseType:'text'});
  }
  getAll():Observable<any>{

    return this.http.get(`${this.baseUrl}`+"/samp",{responseType:'text'});
  }

}
