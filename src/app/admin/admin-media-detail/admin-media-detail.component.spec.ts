import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMediaDetailComponent } from './admin-media-detail.component';

describe('AdminMediaDetailComponent', () => {
  let component: AdminMediaDetailComponent;
  let fixture: ComponentFixture<AdminMediaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMediaDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMediaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
