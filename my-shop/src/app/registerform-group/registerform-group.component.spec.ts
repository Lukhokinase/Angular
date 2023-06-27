import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterformGroupComponent } from './registerform-group.component';

describe('RegisterformGroupComponent', () => {
  let component: RegisterformGroupComponent;
  let fixture: ComponentFixture<RegisterformGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterformGroupComponent]
    });
    fixture = TestBed.createComponent(RegisterformGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
