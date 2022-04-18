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

  constructor(private profileService: ProfileService) { 

    this.getProfiles(); 
    
  }

  ngOnInit(): void {
  }

  getProfiles(){
    this.profileService.getProfileInfo().subscribe(profile =>{
      console.log(profile);
      this.users = profile;

    });
  }

}
