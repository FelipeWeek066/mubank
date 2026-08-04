import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUsersSearch } from './all-users-search';

describe('AllUsersSearch', () => {
  let component: AllUsersSearch;
  let fixture: ComponentFixture<AllUsersSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllUsersSearch],
    }).compileComponents();

    fixture = TestBed.createComponent(AllUsersSearch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
