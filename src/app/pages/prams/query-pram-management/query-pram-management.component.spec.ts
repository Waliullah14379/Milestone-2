import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryPramManagementComponent } from './query-pram-management.component';

describe('QueryPramManagementComponent', () => {
  let component: QueryPramManagementComponent;
  let fixture: ComponentFixture<QueryPramManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryPramManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryPramManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
