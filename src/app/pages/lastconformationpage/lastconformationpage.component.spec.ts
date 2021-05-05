import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastconformationpageComponent } from './lastconformationpage.component';

describe('LastconformationpageComponent', () => {
  let component: LastconformationpageComponent;
  let fixture: ComponentFixture<LastconformationpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastconformationpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastconformationpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
