import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsBalanceComponent } from './savings-balance.component';

describe('SavingsBalanceComponent', () => {
  let component: SavingsBalanceComponent;
  let fixture: ComponentFixture<SavingsBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingsBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
