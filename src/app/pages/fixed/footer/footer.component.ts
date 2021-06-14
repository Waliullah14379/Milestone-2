import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footer:boolean = false
  currentUrl
  constructor(private router:Router) {
    router.events.subscribe(e =>{
      if(e instanceof NavigationEnd){
        // console.log(e);
        this.currentUrl= '/'+e.url.split('/')[1]
        // console.log(this.currentUrl);
        if(this.currentUrl === '/' || this.currentUrl === '/login' || this.currentUrl === '/sign-up'){
          this.footer=false
        }
        else{
          this.footer=true
        }
        
      }
    })
   }
  ngOnInit() {
  }

}
