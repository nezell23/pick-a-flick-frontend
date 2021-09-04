import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultsUserDbComponent } from './search-results-user-db.component';

describe('SearchUserDbComponent', () => {
  let component: SearchResultsUserDbComponent;
  let fixture: ComponentFixture<SearchResultsUserDbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchResultsUserDbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultsUserDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
