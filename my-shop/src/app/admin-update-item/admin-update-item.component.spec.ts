import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateItemComponent } from './admin-update-item.component';

describe('AdminUpdateItemComponent', () => {
  let component: AdminUpdateItemComponent;
  let fixture: ComponentFixture<AdminUpdateItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminUpdateItemComponent]
    });
    fixture = TestBed.createComponent(AdminUpdateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
