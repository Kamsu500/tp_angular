import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyshopComponent } from './myshop.component';

describe('MyshopComponent', () => {
  let component: MyshopComponent;
  let fixture: ComponentFixture<MyshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
