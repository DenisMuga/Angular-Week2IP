import { Component, OnInit } from '@angular/core';
// import { profile } from 'console';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  users: any
  repos: any
  searching!: string;

  constructor(private profileService: ProfileService) { 


    this.getProfiles();
    this.getUserRepo();
    
  }

  ngOnInit(): void {
  }

  getProfiles(){
    this.profileService.updateUserName(this.searching)
    this.profileService.getProfileInfo().subscribe(profile =>{
      console.log(profile);
      this.users = profile;

    });
  }

  getUserRepo(){
    this.profileService.getUserRepos().subscribe(repo =>{
      console.log(repo);
      this.repos = repo;

    });
  }

}
