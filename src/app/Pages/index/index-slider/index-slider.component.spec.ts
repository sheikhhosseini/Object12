import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexSliderComponent } from './index-slider.component';

describe('IndexSliderComponent', () => {
  let component: IndexSliderComponent;
  let fixture: ComponentFixture<IndexSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
