 import { Injectable } from '@angular/core';
 import {HttpClient} from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class NewService {
  url="https://jsonplaceholder.typicode.com/users"
   
constructor(private http:HttpClient) { 
                 

  }
  getDetails(){
     return this.http.get(this.url);
  }
  addStudents(val){
   // console.log(val, 'hello');
    //this.details.push(val);
  }

  
}
