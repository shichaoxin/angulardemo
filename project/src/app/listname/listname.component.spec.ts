import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListnameComponent } from './listname.component';

describe('ListnameComponent', () => {
  let component: ListnameComponent;
  let fixture: ComponentFixture<ListnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
