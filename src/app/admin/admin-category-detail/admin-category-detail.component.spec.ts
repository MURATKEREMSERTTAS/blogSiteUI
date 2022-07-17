import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCategoryDetailComponent } from './admin-category-detail.component';

describe('AdminCategoryDetailComponent', () => {
  let component: AdminCategoryDetailComponent;
  let fixture: ComponentFixture<AdminCategoryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCategoryDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCategoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
