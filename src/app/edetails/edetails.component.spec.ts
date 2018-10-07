import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdetailsComponent } from './edetails.component';

describe('EdetailsComponent', () => {
  let component: EdetailsComponent;
  let fixture: ComponentFixture<EdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
