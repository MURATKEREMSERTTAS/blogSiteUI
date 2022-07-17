import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMediasComponent } from './admin-medias.component';

describe('AdminMediasComponent', () => {
  let component: AdminMediasComponent;
  let fixture: ComponentFixture<AdminMediasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMediasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMediasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
