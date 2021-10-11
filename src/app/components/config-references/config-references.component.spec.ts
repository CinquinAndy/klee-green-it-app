import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigReferencesComponent } from './config-references.component';

describe('ConfigReferencesComponent', () => {
  let component: ConfigReferencesComponent;
  let fixture: ComponentFixture<ConfigReferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigReferencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigReferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
