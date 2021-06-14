import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MyServiceService } from '../../provider/my-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup
  fullName
  
  signUpFormSubmit(){
    localStorage.setItem('signUpFormData', JSON.stringify(this.signUpForm.value))
    console.log(this.signUpForm.value);
       /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
        this.myService.fullName.next(this.signUpForm.value.firstName +" "+this.signUpForm.value.lastName)
this.router.navigate(['/pram-management'])      
}

  constructor( private router:Router ,private spinner: NgxSpinnerService  , public myService:MyServiceService) {
    this.myService.fullName.subscribe(uname=>{
      this.fullName = uname
    })
   }
  ngOnInit() {
    this.signUpForm = new FormGroup({
      firstName: new FormControl('' ,[ Validators.required , Validators.pattern(/^[a-zA-Z/ ]{1,60}$/)]),
      lastName: new FormControl('' ,[ Validators.required , Validators.pattern(/^[a-zA-Z/ ]{1,60}$/)]),
      userEmail : new FormControl('' ,[ Validators.required ,Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]),
      mobileNumber: new FormControl('' ,[ Validators.required , Validators.pattern(/^[0-9]{10,10}$/)]),
      password : new FormControl('', [ Validators.required , Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}') ]),
      confirmPassword : new FormControl('', [ Validators.required ])

    })    
}
}
