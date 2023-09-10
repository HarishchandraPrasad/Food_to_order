import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRestaurantsComponent } from './add-restaurants.component';

describe('AddRestaurantsComponent', () => {
  let component: AddRestaurantsComponent;
  let fixture: ComponentFixture<AddRestaurantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddRestaurantsComponent]
    });
    fixture = TestBed.createComponent(AddRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
