import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObscomponentComponent } from './obscomponent.component';

describe('ObscomponentComponent', () => {
  let component: ObscomponentComponent;
  let fixture: ComponentFixture<ObscomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObscomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
