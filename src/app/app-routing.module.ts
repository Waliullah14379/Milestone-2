import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/authentication/login/login.component';
import { SignUpComponent } from './pages/authentication/sign-up/sign-up.component';
import { HomeComponent } from './pages/dashboard/home/home.component';
import { PramManagementComponent } from './pages/prams/pram-management/pram-management.component';
import { PramViewComponent } from './pages/prams/pram-view/pram-view.component';
import { QueryPramManagementComponent } from './pages/prams/query-pram-management/query-pram-management.component';
import { QueryPramViewComponent } from './pages/prams/query-pram-view/query-pram-view.component';
import { GuardGuard } from './pages/provider/guard.guard';


const routes: Routes = [
  {path:'' , redirectTo:"login" , pathMatch:"full"},
  {path:"login" , component:LoginComponent},
  {path:"sign-up" , component:SignUpComponent},
  {path:"pram-management" , component:PramManagementComponent ,canActivate:[GuardGuard]},
  {path:"pram-view/:name/:email" , component:PramViewComponent ,canActivate:[GuardGuard]},
  {path:"query-pram-management" , component:QueryPramManagementComponent , canActivate:[GuardGuard]},
  {path:"query-pram-view" , component:QueryPramViewComponent , canActivate:[GuardGuard]},
  {path:"home" , component:HomeComponent , canActivate:[GuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
