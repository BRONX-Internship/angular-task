import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicComComponent } from './dynamic-com.component';

describe('DynamicComComponent', () => {
  let component: DynamicComComponent;
  let fixture: ComponentFixture<DynamicComComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicComComponent]
    });
    fixture = TestBed.createComponent(DynamicComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
