import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigComparisonComponent } from './config-comparison.component';

describe('ConfigComparisonComponent', () => {
  let component: ConfigComparisonComponent;
  let fixture: ComponentFixture<ConfigComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigComparisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
