import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoursquareComponent } from './foursquare.component';

describe('FoursquareComponent', () => {
  let component: FoursquareComponent;
  let fixture: ComponentFixture<FoursquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoursquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoursquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
