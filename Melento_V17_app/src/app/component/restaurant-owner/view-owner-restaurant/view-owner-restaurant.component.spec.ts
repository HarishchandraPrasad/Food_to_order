import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOwnerRestaurantComponent } from './view-owner-restaurant.component';

describe('ViewOwnerRestaurantComponent', () => {
  let component: ViewOwnerRestaurantComponent;
  let fixture: ComponentFixture<ViewOwnerRestaurantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewOwnerRestaurantComponent]
    });
    fixture = TestBed.createComponent(ViewOwnerRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
