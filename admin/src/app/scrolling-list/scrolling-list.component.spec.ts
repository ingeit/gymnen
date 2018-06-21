import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollingListComponent } from './scrolling-list.component';

describe('ScrollingListComponent', () => {
  let component: ScrollingListComponent;
  let fixture: ComponentFixture<ScrollingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
