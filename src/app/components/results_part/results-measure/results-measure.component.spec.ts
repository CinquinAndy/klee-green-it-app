import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsMeasureComponent } from './results-measure.component';

describe('ResultsMeasureComponent', () => {
  let component: ResultsMeasureComponent;
  let fixture: ComponentFixture<ResultsMeasureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsMeasureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsMeasureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
