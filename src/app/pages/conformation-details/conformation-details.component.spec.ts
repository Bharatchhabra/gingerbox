import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConformationDetailsComponent } from './conformation-details.component';

describe('ConformationDetailsComponent', () => {
  let component: ConformationDetailsComponent;
  let fixture: ComponentFixture<ConformationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConformationDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConformationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
