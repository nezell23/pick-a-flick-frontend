import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchUserDbComponent } from './search-user-db.component';

describe('SearchUserDbComponent', () => {
  let component: SearchUserDbComponent;
  let fixture: ComponentFixture<SearchUserDbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchUserDbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchUserDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
