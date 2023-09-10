import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Cart } from 'src/app/models/cart';
import { Dish } from 'src/app/models/dish';
import { Order } from 'src/app/models/order';
import { CartService } from 'src/app/services/cart.service';
import { DishService } from 'src/app/services/dish.service';
import { OrderService } from 'src/app/services/order.service';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  
  cartId:number=0//parseInt(localStorage.getItem("user_id"))
  count=0
  
  total_amt=0
  amt=0
  cart:Cart=new Cart(0,0,[],[],0,0)
  carts:Cart[]=[]
  orders:Order[]=[]
  order:Order=new Order(0,0,'',[],[],0,0,'')
  arrdishes:Dish[]=[]
  arrD_ids:number[]=[]
  dish:Dish = new Dish(0,0,'','',0,false,'')

  date = new Date()

  currentYear = this.date.getUTCFullYear()
  currentMonth = this.date.getUTCMonth() +1
  currentDay = this.date.getUTCDate()

  currentdate:string=""
  FinalMonth:any
  FinalDay:any
  constructor(private cartService:CartService,private activatedRoute:ActivatedRoute,
    private restaurantService:RestaurantService,private dishesService:DishService,private orderService:OrderService){
      this.orderService.getOrders().subscribe(data=>{
        this.orders=data
      })

    let str = localStorage.getItem('user_id')
    if(str && str!=null){
      this.cartId=parseInt(str)
    }
    
    this.cartService.getCartById(this.cartId).subscribe(data=>{
      this.cart=data
      console.log(this.cart)
      let rest_id = this.cart.cart_restaurant_id
      this.restaurantService.getRestaurantById(rest_id).subscribe(data=>{
        console.log(data)
        
        this.cart.dish_ids.forEach(did=>{
          data.r_dishes.forEach(r_d=>{
            if(did==r_d.id){
              this.arrdishes.push(r_d)
            }
          })
        })
        console.log(this.arrdishes)
        this.total()
      })
    })

    // this.activatedRoute.params.subscribe((params: Params)=>{
    //   let id=params['id'];
    //   console.log(id);
    //   // this.dishesService.getDishbyId(this.cartId).subscribe(data=>{
    //   //   console.log(data)
    //   //   this.dish=data
    //   // })
    //   this.dishesService.getDish_new().subscribe(data=>{
    //     console.log(data)
    //     this.arrdishes=data
    //   })
    //   console.log(this.carts)
    // })
    
  }

  ngOnInit():void{
    if(this.currentMonth < 10){
      this.FinalMonth = "0" + this.currentMonth
    }else{
      this.FinalMonth = this.currentMonth
    }

    if(this.currentDay < 10){
      this.FinalDay = "0" + this.currentDay
    }else{
      this.FinalDay = this.currentDay 
    }

    this.currentdate = this.currentYear + "-" + this.FinalMonth + "-" + this.FinalDay
}
  
  increment(did:number){
    let c=0
    this.cart.dish_ids.forEach(dish_id=>{
      if(did==dish_id){
        c=dish_id-1
        this.cart.number_of_each_dish[c]=this.cart.number_of_each_dish[c]+1
  
      }
      c=c+1
    })
    this.total()
   // this.count=c
  
  }
  decrement(did:number){
    let c=0
    this.cart.dish_ids.forEach(dish_id=>{
      if(did==dish_id){
        c=dish_id-1
        if(this.cart.number_of_each_dish[c]>0){
          this.cart.number_of_each_dish[c]=this.cart.number_of_each_dish[c]-1
        }
        
      }
      c=c-1
    })
    this.total()
    
  
  }
  
  
  total(){
    this.total_amt=0
    for(var i=0;i<this.arrdishes.length;i++){
      this.total_amt+=this.arrdishes[i].d_Price*this.cart.number_of_each_dish[i]
      console.log(this.total_amt)
      
  
  
    }
    this.cart.total=this.total_amt
    console.log(this.cart.total)
    this.cartService.updateCart(this.cart).subscribe(d=>{
    console.log(d)
  })
  }
  clearcart(){
    this.cart.dish_ids=[]
    this.cart.number_of_each_dish=[]
    this.cart.cart_restaurant_id=0
    this.cart.total=0
    this.cartService.updateCart(this.cart).subscribe(d=>{
      console.log(d)
      location.reload()
    })
  }
  
  checkout(){
    
    
    var tempId=0;
    var maxId=0;
    this.orders.forEach(u =>{
      if(maxId < u.id){
        maxId=u.id;
      }
    })
    tempId=maxId;
    tempId=tempId+1;
    console.log(tempId)
    this.order.id=tempId
    this.order.restaurant_id=this.cart.cart_restaurant_id
    this.order.order_date = this.currentdate
    this.order.dishes_id=this.cart.dish_ids
    this.order.num_of_dishes1=this.cart.number_of_each_dish
    this.order.user_id=this.cart.user_id
    this.order.order_total=this.cart.total

    this.orderService.addOrder(this.order).subscribe(data=>{
      console.log(data)
      location.reload()
    })
    this.clearcart()
  }
}
