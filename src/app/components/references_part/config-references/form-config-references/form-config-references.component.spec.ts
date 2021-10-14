import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConfigReferencesComponent } from './form-config-references.component';

describe('FormConfigReferencesComponent', () => {
  let component: FormConfigReferencesComponent;
  let fixture: ComponentFixture<FormConfigReferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormConfigReferencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormConfigReferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
