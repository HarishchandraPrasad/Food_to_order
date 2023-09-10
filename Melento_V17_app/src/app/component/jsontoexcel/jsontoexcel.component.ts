import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-jsontoexcel',
  templateUrl: './jsontoexcel.component.html',
  styleUrls: ['./jsontoexcel.component.scss']
})
export class JsontoexcelComponent {
 

  constructor(private orderService:OrderService,private router:Router){
      
  }
  download(){
    //this.router.navigate(['/ordersexcel'])
    this.orderService.jsontoexcel().subscribe(data=>{
      console.log(data)
    })
  }
}
