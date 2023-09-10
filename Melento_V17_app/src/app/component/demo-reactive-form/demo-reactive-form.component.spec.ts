import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoReactiveFormComponent } from './demo-reactive-form.component';

describe('DemoReactiveFormComponent', () => {
  let component: DemoReactiveFormComponent;
  let fixture: ComponentFixture<DemoReactiveFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoReactiveFormComponent]
    });
    fixture = TestBed.createComponent(DemoReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
