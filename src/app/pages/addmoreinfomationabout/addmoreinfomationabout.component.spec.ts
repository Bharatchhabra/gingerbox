import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmoreinfomationaboutComponent } from './addmoreinfomationabout.component';

describe('AddmoreinfomationaboutComponent', () => {
  let component: AddmoreinfomationaboutComponent;
  let fixture: ComponentFixture<AddmoreinfomationaboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmoreinfomationaboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmoreinfomationaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
