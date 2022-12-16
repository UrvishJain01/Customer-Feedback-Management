import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  ChartOptions } from 'chart.js';
import { FeedbackdetailsService } from '../shared/feedbackdetails.service';


export class ratingViewModel {
  rating: number = 0;
  totalRating: number = 0;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  allRecords: any;
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  totalRating: Array<number> = new Array<number>();
  public pieChartLabels = [1, 2, 3, 4, 5];

  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartDatasets = [{
    data: this.totalRating
  }];

  @Input() ratingInput = 0;
  selectedRating: number = 0;
  constructor(public service: FeedbackdetailsService, private router: Router) {

  }
  ngOnInit(): void {
    this.service.getFeedbacklist().subscribe(res => {
      this.allRecords = res.map(a => a.rating);
      for (var i = 1; i < 6; i++) {
        this.totalRating.push(this.allRecords.filter((x: number) => x == i).length);
      }
      this.pieChartDatasets = [{
        data: this.totalRating
      }];
    });
  }
  public chartClicked(e:any):void {
    this.service.getFeedbacklist().subscribe(res => {
      this.selectedRating= e.active[0].index+1;
      if(e.selectedRating==0)
        this.allRecords=res;
      else
      this.allRecords = res.filter(a => a.rating == this.selectedRating);
    });
  }
  ShowAllRecord()
  {  this.service.getFeedbacklist().subscribe(res => {
    this.allRecords = res;
    });
  }
}
