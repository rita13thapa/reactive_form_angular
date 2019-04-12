 import { Injectable } from '@angular/core';

 
@Injectable({
  providedIn: 'root'
})
export class NewService {
   details = [
     
       {rollNo : 1, name : 'Rita', class :7, gender :'female', address :'boudha', contactNo : 458689, email : 'fji@yahoo.com'} ,
       {rollNo:2,name:'Rojit Manandhar',class:2,gender:'Male',address:'Hetauda',contactNo:67890,email:'jfdfj@yahoo.com'},
       {rollNo:3,name:'Navin Shahi',class:7,gender:'Male',address:'Soyambhu',contactNo:24680,email:'jfdfj@yahoo.com'},
       {rollNo:4,name:'Anupama Dhungana',class:9,gender:'Female',address:'Jorpati',contactNo:13579,email:'jfdfj@yahoo.com'}
    
   ]
constructor() { 
                 

  }
  getDetails(){
     return this.details;
  }
  addStudents(val){
   // console.log(val, 'hello');
    this.details.push(val);
  }

  
}
