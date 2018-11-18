import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmcontentComponent } from './filmcontent.component';

describe('FilmcontentComponent', () => {
  let component: FilmcontentComponent;
  let fixture: ComponentFixture<FilmcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
