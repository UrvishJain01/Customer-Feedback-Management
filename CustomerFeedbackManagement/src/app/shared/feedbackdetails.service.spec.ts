import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { FeedbackdetailsService } from './feedbackdetails.service';



describe('FeedbackdetailsService', () => {
  let service: FeedbackdetailsService;

beforeEach(async() => {
   TestBed.configureTestingModule({
      providers: [FeedbackdetailsService],
    });
    service = TestBed.inject(FeedbackdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});