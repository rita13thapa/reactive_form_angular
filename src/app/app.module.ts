import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { AddstudentsComponent } from './addstudents/addstudents.component';

import { NewService } from './service/new.service';
import {HttpClientModule} from "@angular/common/http";
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent,
    AddstudentsComponent,
    UsersComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    
    ],
  providers: [NewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
