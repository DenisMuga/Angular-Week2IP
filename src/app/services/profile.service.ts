import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
  private clientid = '252a21e805fec95ffc2a';
  private clientsecret = '167b7081cadd75169a679cf315fb7ce7881a49eb';

  constructor(private http:HttpClient) { 
    console.log("Service is now ready!");
    this.username = "DenisMuga";
  }
  getProfileInfo():Observable<any>{
    return this.http.get<any>("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
    // .map(res => res.json());
  }
}
