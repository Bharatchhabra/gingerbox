import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConformRegFormComponent } from './conform-reg-form.component';

describe('ConformRegFormComponent', () => {
  let component: ConformRegFormComponent;
  let fixture: ComponentFixture<ConformRegFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConformRegFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConformRegFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
