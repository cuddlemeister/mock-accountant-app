import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneApplicationsComponent } from './done-applications.component';

describe('DoneApplicationsComponent', () => {
  let component: DoneApplicationsComponent;
  let fixture: ComponentFixture<DoneApplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoneApplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
