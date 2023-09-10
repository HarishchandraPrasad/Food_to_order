import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Cart } from 'src/app/models/cart';

import { Dish } from 'src/app/models/dish';
import { Restaurant } from 'src/app/models/restaurant';
import { CartService } from 'src/app/services/cart.service';
import { DishService } from 'src/app/services/dish.service';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss']
})
export class DishesComponent {
  // @Input() dish:string[]=[]
  shouldGreyOut:boolean=true;
  arrdish:Dish[]=[]
  dishes:Dish=new Dish(0,0,'','',0,false,'')
  restaurant:Restaurant=new Restaurant(0,0,'','',[],[])
  arrRestaurants:Restaurant[]=[]
  arrcart: Cart[]=[]
  cart = new Cart(0,0,[],[],0,0)
  uid=JSON.parse(localStorage.getItem("userId")!)
  count=0
  cartId=0
  rest_id=0
  arrD_ids:number[]=[]
  disabledFlag:boolean=false
  constructor(private restaurantService:RestaurantService,private activatedRoute:ActivatedRoute,private cartService:CartService,private userService:UserService,private dishesService: DishService,){
    this.disabledFlag=false
    this.activatedRoute.params.subscribe((params:Params) =>{
      let id=params['id']
      console.log(id)
      
      this.restaurantService.getRestaurantById(id).subscribe(data=>{
        
        this.restaurant=data
        this.arrdish=this.restaurant.r_dishes
        console.log(this.arrdish)
      })
      
    })
  }
  
  addToCart(did:number,rid:number){
    this.disabledFlag=true
    
  
    let str=localStorage.getItem('user_id')
      if(str && str!=null){
        this.cartId=parseInt(str);
      }
      if(this.cartId == 0){
        alert("Please Login")
      }

    
      this.cartService.getCartById(this.cartId).subscribe(data=>{
        this.disabledFlag=true
        this.cart=data
        this.arrD_ids=this.cart.dish_ids
        console.log(data)
        console.log(this.cart.dish_ids)
      
     
    
        let price=this.dishes.d_Price
        
      
        this.cart.id=this.cartId
        this.cart.cart_restaurant_id=rid
        if(this.arrD_ids.length==0){
          this.arrD_ids.push(did)
        }else{
         console.log("in else "+ this.cart.dish_ids)
        let flag=0
        for(let i=0;i<this.arrD_ids.length;i++){
          console.log(this.arrD_ids[i],did)
          if(this.arrD_ids[i]==did){
              console.log("dish exits"+this.cart.dish_ids[i])
              flag=1
              break;
          }
          
      }
      if(flag==0){
        this.arrD_ids.push(did)
      }
      this.cart.dish_ids=this.arrD_ids
    }
        console.log(this.cart.dish_ids)
        let count=0
        this.cart.dish_ids.forEach(d=>{
          if(this.cart.number_of_each_dish[count]== null){
            this.cart.number_of_each_dish[count]=0
          }
          if (d==did){
            this.cart.number_of_each_dish[count]+=1
            console.log(this.cart.number_of_each_dish)
          }
          count+=1
        })
        console.log(this.cart.number_of_each_dish)
        // for(var i=0;i<this.carts.dish_ids.length;i++){
        //   this.restaurantService.getRestaurantbyId(r_id).subscribe(res=>{
        //     console.log(res)
        //     let arrdishes=res.r_dishes

            
        //   })
        // }
        //this.cart.total=0
        //this.cart.number_of_each_dish=[]
        //this.carts.id=rid
        //this.cart=new Cart(this.cart.id,this.cart.dish_ids,this.cart.number_of_each_dish,this.cart.cart_restaurant_id,price)
        console.log(this.cart)
        
        this.cartService.updateCart(this.cart).subscribe(data=>{
          this.disabledFlag=true
  
  
          console.log(data)
  
          location.reload()
        })
      })
    //this.carts = new Cart(0,[],[],0,0)
    }
  

}
