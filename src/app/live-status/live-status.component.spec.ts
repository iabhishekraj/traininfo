import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveStatusComponent } from './live-status.component';

describe('LiveStatusComponent', () => {
  let component: LiveStatusComponent;
  let fixture: ComponentFixture<LiveStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
