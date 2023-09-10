import { Injectable } from '@angular/core';
import { Dish } from '../models/dish';



@Injectable({
  providedIn: 'root'
})
export class DishService {
  
  arrDishes:Dish[]=[//new Dish(1,1,'Biryani',' mixed rice dish originating among the Muslims of South Asia',250,false),
                   // new Dish(2,1,'Noodles','piece of pasta, especially a long, skinny one',100,true)
                  ]

  constructor() { }

  
}
