import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFlickComponent } from './view-flick.component';

describe('ViewFlickComponent', () => {
  let component: ViewFlickComponent;
  let fixture: ComponentFixture<ViewFlickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFlickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFlickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
