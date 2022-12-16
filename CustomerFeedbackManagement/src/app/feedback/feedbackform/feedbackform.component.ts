import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder }  from '@angular/forms';
import { Router } from '@angular/router';
import { IfeedbackData } from '../../shared/feedbackdata.model';
import { FeedbackdetailsService } from '../../shared/feedbackdetails.service';


@Component({
  selector: 'app-feedbackform',
  templateUrl: './feedbackform.component.html',
  styleUrls: ['./feedbackform.component.css']
})
export class FeedbackformComponent implements OnInit {

  FeedbackForm!: FormGroup;
  submitted = false;
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number=0;
  constructor(public service:FeedbackdetailsService,private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit() {
      this.FeedbackForm = this.formBuilder.group({
          Name: ['', Validators.required],
          Feedback: ['', Validators.required],
          Rating: [this.selectedValue==0, Validators.required],
          Email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
          ContactNo: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      });
  }

  get f() { return this.FeedbackForm.controls; }
  countStar(star:number) {
    this.selectedValue = star;
  }
  onSubmit()
  {
    this.submitted = true;
        // stop here if form is invalid
        if (this.FeedbackForm.invalid) {
            return;
        }
        
     var feedbackformData =this.FeedbackForm.value;
     let feedbackPayload :IfeedbackData= {
       name: feedbackformData.Name,
       email: feedbackformData.Email,
       contactNo: feedbackformData.ContactNo,
       rating: this.selectedValue,
       feedback: feedbackformData.Feedback,
       id: 0,
       createdDateTime:new Date()
     }
    
     this.addFeedback(feedbackPayload);
  }
  addFeedback(feedbackPayload:IfeedbackData)
  {
   
    this.service.postFeedbackDetail(feedbackPayload).subscribe(
      res=>{
         this.router.navigate(['/dashboard']);
      },
      err=>
      {
          console.log(err.error);
      }
    )
  }
}
