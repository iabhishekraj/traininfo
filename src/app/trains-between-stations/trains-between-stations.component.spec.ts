import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainsBetweenStationsComponent } from './trains-between-stations.component';

describe('TrainsBetweenStationsComponent', () => {
  let component: TrainsBetweenStationsComponent;
  let fixture: ComponentFixture<TrainsBetweenStationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainsBetweenStationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainsBetweenStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
