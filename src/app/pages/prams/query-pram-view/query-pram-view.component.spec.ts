import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryPramViewComponent } from './query-pram-view.component';

describe('QueryPramViewComponent', () => {
  let component: QueryPramViewComponent;
  let fixture: ComponentFixture<QueryPramViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryPramViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryPramViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
