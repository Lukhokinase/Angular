import { ComponentFixture, TestBed } from '@angular/core/testing';

import { bagComponent } from './bag.component';

describe('YourBagComponent', () => {
  let component: bagComponent;
  let fixture: ComponentFixture<bagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [bagComponent]
    });
    fixture = TestBed.createComponent(bagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
