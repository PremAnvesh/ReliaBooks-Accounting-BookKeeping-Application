import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExReportsComponent } from './ex-reports.component';

describe('ExReportsComponent', () => {
  let component: ExReportsComponent;
  let fixture: ComponentFixture<ExReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
