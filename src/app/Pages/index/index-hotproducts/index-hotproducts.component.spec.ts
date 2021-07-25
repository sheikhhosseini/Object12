import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexHotproductsComponent } from './index-hotproducts.component';

describe('IndexHotproductsComponent', () => {
  let component: IndexHotproductsComponent;
  let fixture: ComponentFixture<IndexHotproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexHotproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexHotproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
