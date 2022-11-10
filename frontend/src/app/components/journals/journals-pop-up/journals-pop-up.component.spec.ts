import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalsPopUpComponent } from './journals-pop-up.component';

describe('JournalsPopUpComponent', () => {
  let component: JournalsPopUpComponent;
  let fixture: ComponentFixture<JournalsPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JournalsPopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JournalsPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
