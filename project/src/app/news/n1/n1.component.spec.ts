import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { N1Component } from './n1.component';

describe('N1Component', () => {
  let component: N1Component;
  let fixture: ComponentFixture<N1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ N1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(N1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
