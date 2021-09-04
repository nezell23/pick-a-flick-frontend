import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFlickComponent } from './edit-flick.component';

describe('EditFlickComponent', () => {
  let component: EditFlickComponent;
  let fixture: ComponentFixture<EditFlickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFlickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFlickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
