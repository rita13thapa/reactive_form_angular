import { Component, OnInit } from '@angular/core';
import { NewService} from '../service/new.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
// showDetails;
     
stdList;
  constructor(private addStudent:NewService) { }

  ngOnInit() {
    
      this.addStudent.getDetails().subscribe(response=>{
        this.stdList = response;
      })
  }




}
