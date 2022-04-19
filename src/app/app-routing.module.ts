import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { RepositoriesComponent } from './repositories/repositories.component';

const routes: Routes = [
  {path:"",redirectTo:"profiles",pathMatch:"full"},
  {path:"profiles", component:ProfileComponent},
  {path:"repos", component:RepositoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
