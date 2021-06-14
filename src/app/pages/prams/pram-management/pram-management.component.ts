import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pram-management',
  templateUrl: './pram-management.component.html',
  styleUrls: ['./pram-management.component.css']
})
export class PramManagementComponent implements OnInit {
  userRegesterdData
  userName
  email
  constructor(private router:Router) { }

  ngOnInit() {
    this.userRegesterdData = localStorage.getItem('signUpFormData');
    this.userRegesterdData = JSON.parse(this.userRegesterdData)
    this.userName = this.userRegesterdData.firstName + " "+this.userRegesterdData.lastName
    this.email = this.userRegesterdData.userEmail 
  }

  navigateToChild(){
    this.userName = this.userRegesterdData.firstName + " "+this.userRegesterdData.lastName
    this.email = this.userRegesterdData.userEmail 
    this.router.navigate(['/pram-view' , this.userName  , this.email] )
  }

}
