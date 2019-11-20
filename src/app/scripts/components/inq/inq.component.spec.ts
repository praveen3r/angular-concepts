import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InqComponent } from './inq.component';

describe('InqComponent', () => {
  let component: InqComponent;
  let fixture: ComponentFixture<InqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
