import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { N2Component } from './n2.component';

describe('N2Component', () => {
  let component: N2Component;
  let fixture: ComponentFixture<N2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ N2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(N2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
