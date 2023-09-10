import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';


@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.scss']
})
export class ViewOrdersComponent {

  order:Order[]=[]

  constructor(private orderservice:OrderService){
    this.orderservice.getOrders().subscribe(data=>{
      this.order=data
    })
  }

}
