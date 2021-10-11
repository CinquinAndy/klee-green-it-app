import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigVariationsComparisonComponent } from './config-variations-comparison.component';

describe('ConfigVariationsComparisonComponent', () => {
  let component: ConfigVariationsComparisonComponent;
  let fixture: ComponentFixture<ConfigVariationsComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigVariationsComparisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigVariationsComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
