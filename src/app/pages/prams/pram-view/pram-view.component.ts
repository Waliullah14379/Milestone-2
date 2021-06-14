import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pram-view',
  templateUrl: './pram-view.component.html',
  styleUrls: ['./pram-view.component.css']
})
export class PramViewComponent implements OnInit {
  email
  name
  parentData
  constructor(private activity: ActivatedRoute) {
    activity.params.subscribe(
      res => {
      console.log(res);
      this.parentData = res
      // console.log("Complete data display here "+ this.parentData);
      // this.parentData = JSON.parse(this.parentData)
      this.email= this.parentData.email
      this.name =this.parentData.name

      
    }
     )
   }
  ngOnInit() {
  }

}
