import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTagDetailComponent } from './admin-tag-detail.component';

describe('AdminTagDetailComponent', () => {
  let component: AdminTagDetailComponent;
  let fixture: ComponentFixture<AdminTagDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTagDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTagDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
