import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PramManagementComponent } from './pram-management.component';

describe('PramManagementComponent', () => {
  let component: PramManagementComponent;
  let fixture: ComponentFixture<PramManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PramManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PramManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
