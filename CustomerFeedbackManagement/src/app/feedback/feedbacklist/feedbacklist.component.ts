import { Component, Input, OnInit } from '@angular/core';
import { FeedbackdetailsService } from '../../shared/feedbackdetails.service';
import { IfeedbackData } from '../../shared/feedbackdata.model';

@Component({
  selector: 'app-feedbacklist',
  templateUrl: './feedbacklist.component.html',
  styleUrls: ['./feedbacklist.component.css']
})
export class FeedbacklistComponent implements OnInit {
  @Input() allRecords: IfeedbackData[] = [];

  constructor(public service: FeedbackdetailsService) { }

  selectedRating: number = 0;
  stars: number[] = [1, 2, 3, 4, 5];
  countStar(star:number) {
    this.service.feedbackData.rating = star;
  }
  ngOnInit(): void {
    // this.path.params.subscribe(params => {
    //   if (params['rating']) {
    //     this.selectedRating = parseInt(params['rating']);
    //   }
    // });
    this.service.getFeedbacklist().subscribe(res => {
      if (this.selectedRating == 0)
        this.allRecords = res;
        
      else
        this.allRecords = res.filter(a => a.rating == this.selectedRating);

        this.allRecords =this.allRecords.sort((a, b) => 
        new Date(b.createdDateTime).getTime() - new Date(a.createdDateTime).getTime());

    });
  }

}
