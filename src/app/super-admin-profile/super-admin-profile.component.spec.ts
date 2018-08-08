import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminProfileComponent } from './super-admin-profile.component';

describe('SuperAdminProfileComponent', () => {
  let component: SuperAdminProfileComponent;
  let fixture: ComponentFixture<SuperAdminProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperAdminProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperAdminProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
