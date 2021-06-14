import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-query-pram-management',
  templateUrl: './query-pram-management.component.html',
  styleUrls: ['./query-pram-management.component.css']
})
export class QueryPramManagementComponent implements OnInit {

  userRegesterdData
  userName
  email
  constructor( private router:Router) { }

  ngOnInit() {
    this.userRegesterdData = localStorage.getItem('signUpFormData');
    this.userRegesterdData = JSON.parse(this.userRegesterdData)
    this.userName = this.userRegesterdData.firstName + " "+this.userRegesterdData.lastName
    this.email = this.userRegesterdData.userEmail 
  }
  nevigateToPage2UsingQueryPrams(){
    this.router.navigate(['\query-pram-view'] , {
      queryParams:{
      'userName': this.userName,
      'UserEmail':this.email
    }
  })
  }
}
