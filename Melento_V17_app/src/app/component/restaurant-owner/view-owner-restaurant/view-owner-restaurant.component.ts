import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from 'src/app/models/restaurant';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-view-owner-restaurant',
  templateUrl: './view-owner-restaurant.component.html',
  styleUrls: ['./view-owner-restaurant.component.scss']
})
export class ViewOwnerRestaurantComponent {
  restaurant:Restaurant[]=[]
  allRestaurants:Restaurant[]=[]

  constructor(private restaurantservice:RestaurantService,private router:Router){
    // this.restaurant=this.restaurantservice.getRestaurants()
    let str=localStorage.getItem('user_id')
    if(str && str!=""){
      let user_id=parseInt(str)
    
    this.restaurantservice.getRestaurants().subscribe(data=>{
      this.allRestaurants=data
      console.log(this.allRestaurants)
      for(let i=0;i<this.allRestaurants.length;i++){
        if(this.allRestaurants[i].r_owner_id==user_id){
          this.restaurant.push(this.allRestaurants[i])
        }
      }
    })
    }
  }
}
