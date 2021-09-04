import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAFlickComponent } from './add-a-flick.component';

describe('AddAFlickComponent', () => {
  let component: AddAFlickComponent;
  let fixture: ComponentFixture<AddAFlickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAFlickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAFlickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
