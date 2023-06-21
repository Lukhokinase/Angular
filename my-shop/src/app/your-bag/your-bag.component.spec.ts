import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourBagComponent } from './your-bag.component';

describe('YourBagComponent', () => {
  let component: YourBagComponent;
  let fixture: ComponentFixture<YourBagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YourBagComponent]
    });
    fixture = TestBed.createComponent(YourBagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
