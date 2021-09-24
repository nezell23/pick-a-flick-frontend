import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFlicksByTagComponent } from './view-flicks-by-tag.component';

describe('ViewFlicksByTagComponent', () => {
  let component: ViewFlicksByTagComponent;
  let fixture: ComponentFixture<ViewFlicksByTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFlicksByTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFlicksByTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
