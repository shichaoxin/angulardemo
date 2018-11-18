import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M1Component } from './m1.component';

describe('M1Component', () => {
  let component: M1Component;
  let fixture: ComponentFixture<M1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
