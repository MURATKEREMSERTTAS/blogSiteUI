import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContent2Component } from './admin-content2.component';

describe('AdminContent2Component', () => {
  let component: AdminContent2Component;
  let fixture: ComponentFixture<AdminContent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminContent2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminContent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
