import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-query-pram-view',
  templateUrl: './query-pram-view.component.html',
  styleUrls: ['./query-pram-view.component.css']
})
export class QueryPramViewComponent implements OnInit {
  queryPramData
  email
  name
  constructor(private activity: ActivatedRoute) {
    this.activity.queryParams.subscribe(res => {
      this.queryPramData = res
      console.log(this.queryPramData); 
    
    })
  }
  ngOnInit() {}
}
