import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-add-orders',
  templateUrl: './add-orders.component.html',
  styleUrls: ['./add-orders.component.scss']
})
export class AddOrdersComponent {
    
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
    restaurant_id: ['', Validators.required],
    order_date: ['', Validators.required],
    dishes_ids: ['', Validators.required],
    num_of_dishes: ['', Validators.required],
    user_id: ['', Validators.required],
    total_order: ['', Validators.required],
    payment_mode: ['', Validators.required]
  });
  isLinear = false;
  count=0;
  arrOrders:Order[]=[]
  //public secondFormGroup: FormGroup;
  order: Order;
  countSecondFormSubmit = 0;
  dishes: Order[]=[];
  submitted: boolean=false;
  firstForm: boolean=false;

  constructor(private _formBuilder: FormBuilder,private orderService:OrderService){
   
    this.orderService.getOrders().subscribe(data=>{
      this.arrOrders=data
    })

    

    this.order=new Order(0,0,'',[],[],0,0,'');
  }

  


  saveFirstStepData(formdata:FormGroup){
    console.log("hello")
    this.submitted=true;
    // if(this.firstFormGroup.invalid){
    //   return;
    // }
    let tempId = 0;
    let maxId = 0;
    this.arrOrders.forEach(s => {
      if (maxId < s.id) {
        maxId = s.id;
      }
    })
    tempId = maxId
    tempId++
    console.log(formdata)
    this.order.id=tempId;
    this.order.restaurant_id=formdata.value['restaurant_id'];
    this.order.order_date=formdata.value['order_date'];
    this.order.dishes_id=formdata.value['dishes_ids'];
    this.order.num_of_dishes1=formdata.value['num_of_dishes'];
    this.order.user_id=formdata.value['user_id'];
    this.order.order_total=formdata.value['total_order'];
    this.order.payment_mode=formdata.value['payment_mode'];
    if(this.order.order_date=='' || this.order.order_total==0 || this.order.restaurant_id==0 || this.order.user_id==0 || 
        this.order.payment_mode == '' ){
        alert("All field should not be empty")
    }
    else{
      this.firstForm = true
    }
    
    if(this.firstForm == true){
      console.log(this.order.id);
      this.orderService.addOrder(this.order).subscribe(data=>{
      console.log(data);
    })
    }
    
  }

  

  
}
