import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mm2Component } from './mm2.component';

describe('Mm2Component', () => {
  let component: Mm2Component;
  let fixture: ComponentFixture<Mm2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mm2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
