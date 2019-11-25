import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuartounocomponenteComponent } from './cuartounocomponente.component';

describe('CuartounocomponenteComponent', () => {
  let component: CuartounocomponenteComponent;
  let fixture: ComponentFixture<CuartounocomponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuartounocomponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuartounocomponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
