import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddstudentsComponent } from './addstudents/addstudents.component';

const routes: Routes = [
  {path:'add', component: AddstudentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

