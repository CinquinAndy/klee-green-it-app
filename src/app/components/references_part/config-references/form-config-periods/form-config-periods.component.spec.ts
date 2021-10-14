import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConfigPeriodsComponent } from './form-config-periods.component';

describe('FormConfigPeriodsComponent', () => {
  let component: FormConfigPeriodsComponent;
  let fixture: ComponentFixture<FormConfigPeriodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormConfigPeriodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormConfigPeriodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
