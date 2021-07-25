import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexSocialComponent } from './index-social.component';

describe('IndexSocialComponent', () => {
  let component: IndexSocialComponent;
  let fixture: ComponentFixture<IndexSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexSocialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
