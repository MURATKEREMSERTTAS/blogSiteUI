import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContent2DetailComponent } from './admin-content2-detail.component';

describe('AdminContent2DetailComponent', () => {
  let component: AdminContent2DetailComponent;
  let fixture: ComponentFixture<AdminContent2DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminContent2DetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminContent2DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
