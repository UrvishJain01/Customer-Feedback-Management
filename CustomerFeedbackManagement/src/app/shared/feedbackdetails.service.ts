import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IfeedbackData } from '../shared/feedbackdata.model';


@Injectable({
  providedIn: 'root'
})
export class FeedbackdetailsService {

  constructor(private http: HttpClient) { }
  readonly baseURL = "https://localhost:44384/api/CustomersFeedback";
  feedbackData!: IfeedbackData;
  list: IfeedbackData[] = [];

  getFeedbacklist(): Observable<Array<IfeedbackData>> {
    return this.http.get<Array<IfeedbackData>>(this.baseURL);
  }
  postFeedbackDetail(feedbackPayload:IfeedbackData) {
    return this.http.post(this.baseURL,feedbackPayload);
  }
}
