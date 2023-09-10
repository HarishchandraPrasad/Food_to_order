import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOwnerRestaurantComponent } from './update-owner-restaurant.component';

describe('UpdateOwnerRestaurantComponent', () => {
  let component: UpdateOwnerRestaurantComponent;
  let fixture: ComponentFixture<UpdateOwnerRestaurantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateOwnerRestaurantComponent]
    });
    fixture = TestBed.createComponent(UpdateOwnerRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
