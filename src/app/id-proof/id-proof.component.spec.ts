import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdProofComponent } from './id-proof.component';

describe('IdProofComponent', () => {
  let component: IdProofComponent;
  let fixture: ComponentFixture<IdProofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdProofComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdProofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
