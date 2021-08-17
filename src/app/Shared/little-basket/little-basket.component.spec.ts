import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LittleBasketComponent } from './little-basket.component';

describe('LittleBasketComponent', () => {
  let component: LittleBasketComponent;
  let fixture: ComponentFixture<LittleBasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LittleBasketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LittleBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
