import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-update-orders',
  templateUrl: './update-orders.component.html',
  styleUrls: ['./update-orders.component.scss']
})
export class UpdateOrdersComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
    restaurant_id: ['', Validators.required],
    order_date: ['', Validators.required],
    dishes_ids: ['', Validators.required],
    num_of_dishes: ['', Validators.required],
    user_id: ['', Validators.required],
    total_order: ['', Validators.required]
  });
  isLinear = false;
  count=0;
  idUpdated:number=0
  arrOrders:Order[]=[]
  //public secondFormGroup: FormGroup;
  order: Order;
  countSecondFormSubmit = 0;
  dishes: Order[]=[];
  firstForm: boolean = false;

  constructor(private _formBuilder: FormBuilder,private orderService:OrderService){
   
    this.orderService.getOrders().subscribe(data=>{
      this.arrOrders=data
    })

    

    this.order=new Order(0,0,'',[],[],0,0,'');
  }

  onChangeType(evt:any){
      
    console.log(evt.target.value)
    var idObtained=evt.target.value
    this.idUpdated=parseInt(idObtained.split(':')[1].trim());['1',' 1']

    for(var i=0;i<this.arrOrders.length;i++){
      if(this.idUpdated==this.arrOrders[i].id){
        this.order=this.arrOrders[i]
      }
    }

    
    this.firstFormGroup.get('restaurant_id')?.setValue(this.order.restaurant_id.toString())
    this.firstFormGroup.get('order_date')?.setValue(this.order.order_date)
    this.firstFormGroup.get('dishes_ids')?.setValue(this.order.dishes_id.toString())
    this.firstFormGroup.get('num_of_dishes')?.setValue(this.order.num_of_dishes1.toString())
    this.firstFormGroup.get('user_id')?.setValue(this.order.user_id.toString())
    this.firstFormGroup.get('total_order')?.setValue(this.order.order_total.toString())
    
  }  


  saveFirstStepData(formdata:FormGroup){
    // let tempId = 0;
    // let maxId = 0;
    // this.arrOrders.forEach(s => {
    //   if (maxId < s.id) {
    //     maxId = s.id;
    //   }
    // })
    // tempId = maxId
    // tempId++
    // console.log(formdata)
    // this.order.id=tempId;
    this.order.restaurant_id=formdata.value['restaurant_id'];
    this.order.order_date=formdata.value['order_date'];
    this.order.dishes_id=formdata.value['dishes_ids'];
    this.order.num_of_dishes1=formdata.value['num_of_dishes'];
    this.order.user_id=formdata.value['user_id'];
    this.order.order_total=formdata.value['total_order'];
    if(this.order.order_date=='' || this.order.order_total==0 || this.order.restaurant_id==0 || this.order.user_id==0 || 
        this.order.payment_mode == '' ){
        alert("All field should not be empty")
    }
    else{
      this.firstForm = true
    }
    
    if(this.firstForm == true){
      console.log(this.order.id);
      this.orderService.updateOrder(this.order).subscribe(data=>{
      console.log(data);
    })
    }
    
  }

}
