import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFlicksComponent } from './my-flicks.component';

describe('MyFlicksComponent', () => {
  let component: MyFlicksComponent;
  let fixture: ComponentFixture<MyFlicksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFlicksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFlicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
