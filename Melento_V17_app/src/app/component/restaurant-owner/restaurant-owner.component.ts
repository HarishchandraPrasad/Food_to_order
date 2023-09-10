import { Component } from '@angular/core';
import { Restaurant } from 'src/app/models/restaurant';
import { RestaurantService } from 'src/app/services/restaurant.service';


@Component({
  selector: 'app-restaurant-owner',
  templateUrl: './restaurant-owner.component.html',
  styleUrls: ['./restaurant-owner.component.scss']
})
export class RestaurantOwnerComponent {
  role:string | null
  RestaurantOwnerId:string | null
  arrRestaurants:Restaurant[]=[]
  constructor(private restaurantService:RestaurantService){
    this.restaurantService.getRestaurants().subscribe(data=>{
      this.arrRestaurants=data
      console.log(this.arrRestaurants)
    })
    this.role=localStorage.getItem('role')
    this.RestaurantOwnerId=localStorage.getItem("user_id")
    // alert(this.role)
    // alert(this.RestaurantOwnerId)
  }

  ngOnInit(){
    
  }
  
}
