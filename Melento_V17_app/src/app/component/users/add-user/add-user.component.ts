import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Address } from 'src/app/models/address';
import { Cart } from 'src/app/models/cart';
import { User } from 'src/app/models/user';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { MustMatch } from 'src/app/validations/must-match.validator';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  date = new Date()

  currentYear = this.date.getUTCFullYear()
  currentMonth = this.date.getUTCMonth() +1
  currentDay = this.date.getUTCDate()

  maxDate:string=""
  FinalMonth:any
  FinalDay:any
  user:User=new User(0,'','','','','','',new Address(0,'','','','','','',),'User')
  userArr: User[]=[]
  myForm: FormGroup;
  fName:AbstractControl;
  sName:AbstractControl;
  email:AbstractControl;
  phoneNo:AbstractControl;
  pwd:AbstractControl;
  cpwd:AbstractControl
  dob:AbstractControl;
  hosNo:AbstractControl;
  street:AbstractControl;
  area:AbstractControl;
  city:AbstractControl;
  state:AbstractControl;
  country:AbstractControl;
  pinCode:AbstractControl;
  role:AbstractControl;
  submitted=false;
  

  constructor(fb: FormBuilder,private userService:UserService,private cartService:CartService) {

    this.userService.getUsers().subscribe(data=>{
      this.userArr=data
      console.log(this.user)
    })
    this.myForm = fb.group({
      'fName': ['',Validators.required],
      'sName': ['',Validators.required],
      'email': ['',Validators.required],
      'phoneNo': ['',Validators.required],
      'pwd': ['',Validators.required],
      'cpwd': ['',Validators.required],
      'dob': ['',Validators.required],
      
      'hosNo': ['',Validators.required],
      'street': ['',Validators.required],
      'area': ['',Validators.required],
      'city': ['',Validators.required],
      'state': ['',Validators.required],
      'country': ['',Validators.required],
      'pinCode': ['',Validators.required],
      'role':['',Validators.required]
    },
    {
      validator: MustMatch ('pwd','cpwd')
    }
    );
    this.fName=this.myForm.controls['fName']
    this.sName=this.myForm.controls['sName']
    this.email=this.myForm.controls['email']
    this.phoneNo=this.myForm.controls['phoneNo']
    this.pwd=this.myForm.controls['pwd']
    this.cpwd=this.myForm.controls['cpwd']
    this.dob=this.myForm.controls['dob']
    this.hosNo=this.myForm.controls['hosNo']
    this.street=this.myForm.controls['street']
    this.area=this.myForm.controls['area']
    this.city=this.myForm.controls['city']
    this.state=this.myForm.controls['state']
    this.country=this.myForm.controls['country']
    this.pinCode=this.myForm.controls['pinCode']
    this.role=this.myForm.controls['role']
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

    this.maxDate = this.currentYear + "-" + this.FinalMonth + "-" + this.FinalDay
  }
  get f(){return this.myForm.controls}

  onSubmit(value: string): void {
    this.submitted=true;
    if(this.myForm.invalid){
      return;
    }
    var tempId=0;
    var maxId=0;
    this.userArr.forEach(u =>{
      if(maxId < u.id){
        maxId=u.id;
      }
    })
    tempId=maxId;
    tempId=tempId+1;
    console.log(tempId)
    
    let fN=this.myForm.value.fName
    let sN=this.myForm.value.sName
    let em=this.myForm.value.email
    let pN=this.myForm.value.phoneNo
    let pW=this.myForm.value.pwd
    let db=this.myForm.value.dob
    let hN=this.myForm.value.hosNo
    let st=this.myForm.value.street
    let ar=this.myForm.value.area
    let ci=this.myForm.value.city
    let sa=this.myForm.value.state
    let ct=this.myForm.value.country
    let pc=this.myForm.value.pinCode
    let rl=this.myForm.value.role
    // let role="user"
    this.user.id=tempId
    this.user.first_name=fN
    this.user.last_name=sN
    this.user.email=em
    this.user.mobile=pN
    this.user.password=pW
    this.user.dob=db
    this.user.role=rl
    this.user.address.house_No=hN
    this.user.address.street=st
    this.user.address.area=ar
    this.user.address.city=ci
    this.user.address.country=ct
    this.user.address.pincode=pc
    console.log(this.user)

    // this.UserService.addUser(this.user)

    this.userService.addUser(this.user).subscribe(data=>{
      console.log(data)
      console.log(data['insertedId'])
      let uid=data['insertedId']
      let c= new Cart(uid,uid,[],[],0,0)
      this.cartService.addCart(c).subscribe(d=>{
        console.log("New cart created")
        console.log(d)
        location.reload()
      })
    })
    
    this.myForm.reset();
    
  }

}
