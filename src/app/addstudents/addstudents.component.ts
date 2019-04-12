


import { Component, OnInit } from '@angular/core';
import {NewService} from '../service/new.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-addstudents',
  templateUrl: './addstudents.component.html',
  styleUrls: ['./addstudents.component.css']
})
export class AddstudentsComponent implements OnInit {
 addForm:FormGroup;
 error=false;
  constructor(private serv:NewService, private fb:FormBuilder) { }

  ngOnInit() {
  
   this.addForm = this.fb.group ({
        rollNo:['',[Validators.required,Validators.pattern(/[^0-9]*/)]],
        name:['',[Validators.required,Validators.minLength(2),Validators.maxLength(15),Validators.pattern(/^[a-zA-Z\s]*$/)]],
        class:['',[Validators.required,Validators.pattern(/[^0-9]*/)]],
        gender:['',[Validators.required]],
        address:['',[Validators.required]],
        contactNo:['',[Validators.required,Validators.pattern(/[^0-9]*/)]],
        email:['',[Validators.required, Validators.email]]
      })

   }

onSubmit(){
  
  if(!this.addForm.valid){
    this.error=true;
  }
  else{
this.serv.addStudents(this.addForm.value);
  }
  

  
  }
}

