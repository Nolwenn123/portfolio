import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PasswordPageComponent } from './password-page/password-page.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', component: PasswordPageComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
