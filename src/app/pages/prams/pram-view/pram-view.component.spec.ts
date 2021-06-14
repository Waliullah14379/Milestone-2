import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PramViewComponent } from './pram-view.component';

describe('PramViewComponent', () => {
  let component: PramViewComponent;
  let fixture: ComponentFixture<PramViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PramViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PramViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
