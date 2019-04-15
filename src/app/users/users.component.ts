import { Component, OnInit } from '@angular/core';
import {ThisService } from '../servicess/this.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 showDetails;
  constructor(private products:ThisService) { }

  ngOnInit() {
    this.products.getDetails().subscribe(r=>{
        this.showDetails=r;
    
    });

    }
  }


