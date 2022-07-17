import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDetailAuthorComponent } from './admin-detail-author.component';

describe('AdminDetailAuthorComponent', () => {
  let component: AdminDetailAuthorComponent;
  let fixture: ComponentFixture<AdminDetailAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDetailAuthorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDetailAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
