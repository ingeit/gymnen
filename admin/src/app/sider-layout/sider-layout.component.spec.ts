import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SiderLayoutComponent } from './sider-layout.component';

describe('SiderLayoutComponent', () => {
  let component: SiderLayoutComponent;
  let fixture: ComponentFixture<SiderLayoutComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SiderLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiderLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
