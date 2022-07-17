import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContentAddComponent } from './admin-content-add.component';

describe('AdminContentAddComponent', () => {
  let component: AdminContentAddComponent;
  let fixture: ComponentFixture<AdminContentAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminContentAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminContentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
