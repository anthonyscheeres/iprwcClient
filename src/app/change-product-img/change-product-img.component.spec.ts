import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeProductImgComponent } from './change-product-img.component';

describe('ChangeProductImgComponent', () => {
  let component: ChangeProductImgComponent;
  let fixture: ComponentFixture<ChangeProductImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeProductImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeProductImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
