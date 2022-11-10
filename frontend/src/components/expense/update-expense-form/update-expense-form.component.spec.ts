import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateExpenseFormComponent } from './update-expense-form.component';

describe('UpdateExpenseFormComponent', () => {
  let component: UpdateExpenseFormComponent;
  let fixture: ComponentFixture<UpdateExpenseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateExpenseFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateExpenseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
