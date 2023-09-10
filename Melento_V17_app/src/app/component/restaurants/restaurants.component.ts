import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Dish } from 'src/app/models/dish';
import { Restaurant } from 'src/app/models/restaurant';
import { DishService } from 'src/app/services/dish.service';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent {
  
  // @Input() restaurant:string[]=[]
  // arrDishes:[string[],string[],string[]]=[["Dosa","Mvm","Closed"],["Pizza","Mvm","Closed",],["Noodles","Mvm","Closed"]]
  arrRestaurants:Restaurant[]=[]
  pagedRestaurants: Restaurant[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 3;
  
  
  

  constructor(private router:Router ,private restaurantService:RestaurantService){
    this.restaurantService.getRestaurants().subscribe(data=>{
      this.arrRestaurants=data
    })
    this.loadRestaurants();
  }

  loadRestaurants() {
    this.restaurantService.getRestaurants().subscribe(data=>{
      this.arrRestaurants=data;
      this.updatePagedRestaurants();
    })
  }

  updatePagedRestaurants() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.pagedRestaurants = this.arrRestaurants.slice(startIndex, startIndex + this.itemsPerPage);
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.updatePagedRestaurants();
  }

  get pages(): number[] {
    const pageCount = Math.ceil(this.arrRestaurants.length / this.itemsPerPage);
    return new Array(pageCount).fill(0).map((_, i) => i + 1);
  }

  viewDetails(rid:number){
    this.router.navigate(['restaurants/'+rid])
  }

         
}
