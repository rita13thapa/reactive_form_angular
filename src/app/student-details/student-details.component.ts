import { Component, OnInit } from '@angular/core';
import { NewService} from '../service/new.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
showDetails;
     

  constructor(private addStudent:NewService) { }

  ngOnInit() {
    
      this.showDetails = this.addStudent.getDetails();
    
  }




}
