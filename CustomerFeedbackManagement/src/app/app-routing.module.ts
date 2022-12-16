import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeedbackformComponent } from './feedback/feedbackform/feedbackform.component';
import { FeedbacklistComponent } from './feedback/feedbacklist/feedbacklist.component';

const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'feedback-list', component:FeedbacklistComponent},
  {path:'feedback-list/:rating', component:FeedbacklistComponent},
  {path:'feedback-form', component:FeedbackformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
