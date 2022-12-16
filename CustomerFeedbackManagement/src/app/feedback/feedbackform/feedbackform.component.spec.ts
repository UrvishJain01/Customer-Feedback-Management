import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';

import { FeedbackformComponent } from './feedbackform.component';

class MockRouter {
  navigateByUrl(url: string): string { return url; }
}

describe('FeedbackformComponent', () => {
  let component: FeedbackformComponent;
  let fixture: ComponentFixture<FeedbackformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedbackformComponent],
      imports: [BrowserAnimationsModule, HttpClientModule, ReactiveFormsModule, FormsModule],
      providers: [{ provide: Router, useClass: MockRouter }],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('feedback form invalid when empty', () => {
    expect(component.FeedbackForm.valid).toBeFalsy();
  });

  it('Should check required validation for email', () => {
    expect(component.FeedbackForm.get('email')?.errors).toBeTruthy();
  });

  it('Should check for Inappropriate email Field', () => {
    component.FeedbackForm.get('email')?.setValue('Any@withoutdot');
    expect(component.FeedbackForm.get('email')?.errors).toBeTruthy();
  });
 
});
