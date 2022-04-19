import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  repos:any
  search!:string

  constructor(private service:ProfileService) { 
    this.getRepositories();
  }

  ngOnInit(): void {
  }

getRepositories(){
  this.service.updateSearchTerm(this.search)
  this.service.searchRepos().subscribe(repo =>{
    console.log(repo.items);
    this.repos = repo.items;

  });
}
}

