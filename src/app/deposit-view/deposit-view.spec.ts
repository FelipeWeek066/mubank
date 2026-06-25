import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositView } from './deposit-view';

describe('DepositView', () => {
  let component: DepositView;
  let fixture: ComponentFixture<DepositView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepositView],
    }).compileComponents();

    fixture = TestBed.createComponent(DepositView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
