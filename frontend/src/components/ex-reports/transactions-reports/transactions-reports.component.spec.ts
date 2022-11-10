import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsReportsComponent } from './transactions-reports.component';

describe('TransactionsReportsComponent', () => {
  let component: TransactionsReportsComponent;
  let fixture: ComponentFixture<TransactionsReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionsReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
