import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceinfoComponent } from './sourceinfo.component';

describe('SourceinfoComponent', () => {
  let component: SourceinfoComponent;
  let fixture: ComponentFixture<SourceinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
