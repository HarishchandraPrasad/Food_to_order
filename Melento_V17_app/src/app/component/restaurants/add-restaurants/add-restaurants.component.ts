import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Address } from 'src/app/models/address';
import { Dish } from 'src/app/models/dish';
import { Restaurant } from 'src/app/models/restaurant';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-add-restaurants',
  templateUrl: './add-restaurants.component.html',
  styleUrls: ['./add-restaurants.component.scss']
})
export class AddRestaurantsComponent {
  firstform:boolean=false;
  secondform:boolean=false;
  thirdform:boolean=false;
  isLinear = false;
  count=0;
  addressCount=0;
  dishCount=0;
  restaurant:Restaurant;
  public addressForm:FormGroup
  public dishForm:FormGroup;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  countSecondFormSubmit=0;
  countThirdFormSubmit=0;
  addresses:Address[]=[];
  dishes:Dish[]=[]

  arrRestaurants:Restaurant[]=[]
  
  

  constructor(private formBuilder: FormBuilder,private restaurantService:RestaurantService) {
    // this.arrRestaurants=this.restaurantService.getRestaurants()
    this.restaurantService.getRestaurants().subscribe(data=>{
      this.arrRestaurants=data
      
      console.log(this.restaurant)
    })
    this.addressForm = this.formBuilder.group({
      form_array_addresses: this.formBuilder.array([this.createAddressFormGroup()])
    });

    this.dishForm=this.formBuilder.group({
      form_array_dishes:this.formBuilder.array([this.createDishesFormGroup()])
    })

    this.firstFormGroup = this.formBuilder.group({
      r_owner_id:['', Validators.required],
      r_Name: ['', Validators.required],
      r_Img_Path:['',Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this.formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });

    this.restaurant= new Restaurant(0,0,'','',[],[])
   }


  private createAddressFormGroup(): FormGroup{
    this.addressCount++
    return new FormGroup({
      'id': new FormControl('', Validators.required),
      'house_No': new FormControl('', Validators.required),
      'street': new FormControl('', Validators.required),
      'area': new FormControl('', Validators.required),
      'city': new FormControl('', Validators.required),
      'country': new FormControl('', Validators.required),
      'pincode': new FormControl('', Validators.required)
    })
  }

  private createDishesFormGroup(): FormGroup{
    this.dishCount++
    return new FormGroup({
      'id': new FormControl('', Validators.required),
      'res_Id': new FormControl('', Validators.required),
      'd_Name': new FormControl('', Validators.required),
      'd_Description': new FormControl('', Validators.required),
      'd_Price': new FormControl('', Validators.required),
      'd_Veg': new FormControl('', Validators.required),
      'available': new FormControl('', Validators.required),
    })
  }
 
  saveFirstStepData(formdata:FormGroup){
    if(this.firstFormGroup.invalid){
      return;
    }
    let tempId = 0;
    let maxId = 0;
    this.arrRestaurants.forEach(s => {
      if (maxId < s.id) {
        maxId = s.id;
      }
    })
    tempId = maxId
    tempId=tempId+1;
    // tempId++
    console.log(formdata)
    this.restaurant.id=tempId
    // this.restaurant.id=0;
    let str=formdata.value["r_owner_id"]
    this.restaurant.r_owner_id=parseInt(str)
    
    
    this.restaurant.r_Name=formdata.value['r_Name']
    this.restaurant.r_Img_Path=formdata.value['r_Img_Path']
    if(this.restaurant.r_owner_id==null || this.restaurant.r_Name==''  || this.restaurant.r_Img_Path==""){
        alert("Restaurant name and image path not empty")
    }
    else{
      this.firstform = true
      
    }
  }

  saveSecondStepData(formdata: FormGroup) {
    
    
    this.countSecondFormSubmit++
    
   
    if (this.countSecondFormSubmit == this.addressCount) {
      // this.addresses=Object.values(formdata);
      // console.log(formdata);
      let adressArr = Object.values(formdata);
      let count = 1;
      adressArr.forEach((a) => {        
       
      });
      this.addresses = adressArr;
      let temp = JSON.parse(JSON.stringify(this.addresses));
      this.restaurant.r_Addresses = temp[0];
      this.secondform=true;
      this.restaurant.r_Addresses.forEach((a,i)=>{
        a.id=i+1
        if(a.house_No == '' || a.area == '' || a.city == '' || a.country== '' || a.id == null || a.pincode == '' || a.street == ''){
          this.secondform=false;
          alert("All fields show be filled")
          location.reload();
        }
        
        
        
        
      })
      console.log(this.restaurant.r_Addresses);
      // this.restaurantService.addRestaurant(this.restaurant)
      
      


    }
    
  }

  saveThirdStepData(formdata: FormGroup) {
    this.countThirdFormSubmit++;
    if (this.countThirdFormSubmit == this.dishCount) {
      // this.addresses=Object.values(formdata);
      // console.log(formdata);
      let dishArr = Object.values(formdata);
      let count = 1;
      dishArr.forEach((a) => {        
       
      });
      this.dishes = dishArr;
      let temp = JSON.parse(JSON.stringify(this.dishes));
      this.restaurant.r_dishes = temp[0];
      this.thirdform=true
      this.restaurant.r_dishes.forEach((a,i)=>{
        a.id=i+1
        if(a.available==''|| a.d_Description=='' || a.d_Name == ''|| a.d_Price == null || a.d_Veg == undefined || a.id == null || a.res_Id== null){
          this.thirdform=false
          alert("All fields show be filled")
          location.reload();
        }
      })
      console.log(this.restaurant.r_dishes);
      // this.restaurantService.addRestaurant(this.restaurant)
      this.restaurantService.addRestaurant(this.restaurant).subscribe((data:Restaurant)=>{
        console.log(data)
      })
      


    }
  }

  public addAddressFormGroup() {
    const form_array_addresses = this.addressForm.get('form_array_addresses') as FormArray
    form_array_addresses.push(this.createAddressFormGroup())
  }

  public addDishFormGroup() {
    const form_array_dishes = this.dishForm.get('form_array_dishes') as FormArray
    form_array_dishes.push(this.createDishesFormGroup())
  }

  form_array_addresses(): FormArray {
    return this.addressForm.get("form_array_addresses") as FormArray
  }

  form_array_dishes(): FormArray {
    return this.dishForm.get("form_array_dishes") as FormArray
  }

  

  public removeOrClearAddress(i: number) {
    const form_array_addresses = this.addressForm.get('form_array_addresses') as FormArray
    if (form_array_addresses.length > 1) {
      form_array_addresses.removeAt(i)
    }
    else {
      form_array_addresses.reset()
    }
  }

  public removeOrClearDish(i: number) {
    const form_array_dishes = this.dishForm.get('form_array_dishes') as FormArray
    if (form_array_dishes.length > 1) {
      form_array_dishes.removeAt(i)
    }
    else {
      form_array_dishes.reset()
    }
  }

  // this.restaurantService.addRestaurant(this.restaurant).subscribe((data:Restaurant)=>{
  //   console.log(data)
  // })


  ngOnInit() {
    
  }


}
