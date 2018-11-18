import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { N4Component } from './n4.component';

describe('N4Component', () => {
  let component: N4Component;
  let fixture: ComponentFixture<N4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ N4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(N4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
