import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContent2AddComponent } from './admin-content2-add.component';

describe('AdminContent2AddComponent', () => {
  let component: AdminContent2AddComponent;
  let fixture: ComponentFixture<AdminContent2AddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminContent2AddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminContent2AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
