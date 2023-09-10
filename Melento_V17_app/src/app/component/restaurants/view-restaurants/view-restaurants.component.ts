import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from 'src/app/models/restaurant';
import { RestaurantService } from 'src/app/services/restaurant.service';


@Component({
  selector: 'app-view-restaurants',
  templateUrl: './view-restaurants.component.html',
  styleUrls: ['./view-restaurants.component.scss']
})
export class ViewRestaurantsComponent {

  restaurant:Restaurant[]=[]

  constructor(private restaurantservice:RestaurantService,private router:Router){
    // this.restaurant=this.restaurantservice.getRestaurants()
    this.restaurantservice.getRestaurants().subscribe(data=>{
      this.restaurant=data
      console.log(this.restaurant)
    })
  }

}
