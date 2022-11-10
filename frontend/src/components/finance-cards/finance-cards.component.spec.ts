import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceCardsComponent } from './finance-cards.component';

describe('FinanceCardsComponent', () => {
  let component: FinanceCardsComponent;
  let fixture: ComponentFixture<FinanceCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
