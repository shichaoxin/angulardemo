import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mm1Component } from './mm1.component';

describe('Mm1Component', () => {
  let component: Mm1Component;
  let fixture: ComponentFixture<Mm1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mm1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
