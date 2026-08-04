import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralAdminView } from './general-admin-view';

describe('GeneralAdminView', () => {
  let component: GeneralAdminView;
  let fixture: ComponentFixture<GeneralAdminView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralAdminView],
    }).compileComponents();

    fixture = TestBed.createComponent(GeneralAdminView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
