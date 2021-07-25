import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexVideosComponent } from './index-videos.component';

describe('IndexVideosComponent', () => {
  let component: IndexVideosComponent;
  let fixture: ComponentFixture<IndexVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexVideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
