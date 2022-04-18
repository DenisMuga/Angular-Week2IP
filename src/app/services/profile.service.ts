import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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
    const url = `https://api.github.com/users/${this.username}?${environment.key}`
    return this.http.get<any>(url);
    // .map(res => res.json());
  }
}
