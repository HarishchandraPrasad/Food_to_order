import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOwnerRestaurantComponent } from './add-owner-restaurant.component';

describe('AddOwnerRestaurantComponent', () => {
  let component: AddOwnerRestaurantComponent;
  let fixture: ComponentFixture<AddOwnerRestaurantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddOwnerRestaurantComponent]
    });
    fixture = TestBed.createComponent(AddOwnerRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
