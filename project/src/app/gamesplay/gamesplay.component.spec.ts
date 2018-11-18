import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesplayComponent } from './gamesplay.component';

describe('GamesplayComponent', () => {
  let component: GamesplayComponent;
  let fixture: ComponentFixture<GamesplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
