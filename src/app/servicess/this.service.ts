import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ThisService {
url = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http:HttpClient) { }

  getDetails(){
     return this.http.get(this.url);
  }

}
