import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidcontComponent } from './midcont.component';

describe('MidcontComponent', () => {
  let component: MidcontComponent;
  let fixture: ComponentFixture<MidcontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidcontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidcontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
