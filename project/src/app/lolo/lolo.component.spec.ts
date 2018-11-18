import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoloComponent } from './lolo.component';

describe('LoloComponent', () => {
  let component: LoloComponent;
  let fixture: ComponentFixture<LoloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
