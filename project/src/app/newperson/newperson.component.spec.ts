import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpersonComponent } from './newperson.component';

describe('NewpersonComponent', () => {
  let component: NewpersonComponent;
  let fixture: ComponentFixture<NewpersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewpersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewpersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
