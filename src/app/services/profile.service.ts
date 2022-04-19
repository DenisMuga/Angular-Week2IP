import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username!:string;
  // private clientid ="";
  // private clientsecret = string;
  private searchTerm!: string;

  constructor(private http:HttpClient) { 
    console.log("Service is now ready!");
    // this.username = "DenisMuga";
    // this.searchTerm = "pizza"
  }
  getProfileInfo():Observable<any>{
    const url = `https://api.github.com/users/${this.username}?${environment.key}`
    return this.http.get<any>(url);
    // .map(res => res.json());
  }

  getUserRepos():Observable<any>{
    const url = `https://api.github.com/users/${this.username}/repos?${environment.key}`
    return this.http.get<any>(url);
  }

  searchRepos():Observable<any>{
    const url = `https://api.github.com/search/repositories?q=${this.searchTerm}&1,5`
    return this.http.get<any>(url);
  }

  updateSearchTerm(value:string){
    this.searchTerm = value
  }
  updateUserName(value:string){
    this.username = value;
  }


  
}
