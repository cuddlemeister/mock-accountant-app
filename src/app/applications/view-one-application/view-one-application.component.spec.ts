import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOneApplicationComponent } from './view-one-application.component';

describe('ViewOneApplicationComponent', () => {
  let component: ViewOneApplicationComponent;
  let fixture: ComponentFixture<ViewOneApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewOneApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOneApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
