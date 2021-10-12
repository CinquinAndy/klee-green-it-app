import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroAlternativeSelectComponent } from './hero-alternative-select.component';

describe('HeroAlternativeSelectComponent', () => {
  let component: HeroAlternativeSelectComponent;
  let fixture: ComponentFixture<HeroAlternativeSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroAlternativeSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroAlternativeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
