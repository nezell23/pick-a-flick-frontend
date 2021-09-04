import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickAFlickComponent } from './pick-a-flick.component';

describe('PickAFlickComponent', () => {
  let component: PickAFlickComponent;
  let fixture: ComponentFixture<PickAFlickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickAFlickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickAFlickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
