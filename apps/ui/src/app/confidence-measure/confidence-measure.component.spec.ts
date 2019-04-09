import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidenceMeasureComponent } from './confidence-measure.component';

describe('ConfidenceMeasureComponent', () => {
  let component: ConfidenceMeasureComponent;
  let fixture: ComponentFixture<ConfidenceMeasureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfidenceMeasureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfidenceMeasureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
