import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeImgAdminComponent } from './change-img-admin.component';

describe('ChangeImgAdminComponent', () => {
  let component: ChangeImgAdminComponent;
  let fixture: ComponentFixture<ChangeImgAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeImgAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeImgAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
