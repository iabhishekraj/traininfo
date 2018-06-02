import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PnrstatusComponent } from './pnrstatus.component';

describe('PnrstatusComponent', () => {
  let component: PnrstatusComponent;
  let fixture: ComponentFixture<PnrstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PnrstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PnrstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
