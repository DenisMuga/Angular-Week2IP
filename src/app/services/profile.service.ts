import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';  

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
  private clientid = '252a21e805fec95ffc2a';
  private clientsecret = '167b7081cadd75169a679cf315fb7ce7881a49eb';

  constructor(private http:Http) { 
    console.log("Service is now ready!");
    this.username = "DenisMuga";
  }
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/")
  }
}
