import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { MyServiceService } from '../../provider/my-service.service';
declare var $: any 
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  editProfileForm: FormGroup
  navbar:boolean = false
  currentUrl
  fullName 
  mobileNumber
  userRegesterdData
  email
  password
  constructor(private router:Router  , public myService: MyServiceService) {
    router.events.subscribe(e =>{
      if(e instanceof NavigationEnd){
        // console.log(e);
        this.currentUrl= '/'+e.url.split('/')[1]
        // console.log(this.currentUrl);
        if(this.currentUrl === '/' || this.currentUrl === '/login' || this.currentUrl === '/sign-up' ){
          this.navbar=false
        }
        else{
          this.navbar=true }}
    })
this.myService.fullName.subscribe(uname=>{
  this.fullName = uname
})

   }
  ngOnInit() {

    this.editProfileForm = new FormGroup({
      firstName: new FormControl('' ,[ Validators.required , Validators.pattern(/^[a-zA-Z/ ]{1,30}$/)]),
      lastName: new FormControl('' ,[ Validators.required , Validators.pattern(/^[a-zA-Z/ ]{1,30}$/)])
    })
    this.userRegesterdData = localStorage.getItem('signUpFormData');
    this.userRegesterdData = JSON.parse(this.userRegesterdData)
    console.log(this.userRegesterdData);
    this.fullName = this.userRegesterdData.firstName + " "+this.userRegesterdData.lastName
    this.password = this.userRegesterdData.password
    this.email = this.userRegesterdData.userEmail
    this.mobileNumber = this.userRegesterdData.mobileNumber
    console.log(this.userRegesterdData.userEmail);
  }
 
  editProfile(){
    this.myService.fullName.next(this.editProfileForm.value.firstName +" "+this.editProfileForm.value.lastName)
    // this.router.navigate(['/navbar'])      
  }
  openModal(){
    $('#resetPasswordModal').modal('show')
  }
  logOutmodal(){
    $('#logOutmodal').modal('show')
  }
  onLogOut(){
    localStorage.removeItem('token')
    $('#logOutmodal').modal('hide')
    this.router.navigate(['/login'])          
  }
  
}
