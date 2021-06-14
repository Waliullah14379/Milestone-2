import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  fullName = new Subject()

  constructor() { }
  isMySevice(){
    return true;
  }
}
