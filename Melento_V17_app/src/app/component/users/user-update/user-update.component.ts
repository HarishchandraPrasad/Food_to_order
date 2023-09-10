import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Address } from 'src/app/models/address';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent {
  
    user:User=new User(0,'','','','','','',new Address(0,'','','','','','',),'User')
    userArr: User[]=[]
    idUpdated:number=0
    
    myForm: FormGroup;
    fName:AbstractControl;
    sName:AbstractControl;
    email:AbstractControl;
    phoneNo:AbstractControl;
    pwd:AbstractControl;
    dob:AbstractControl;
    hosNo:AbstractControl;
    street:AbstractControl;
    area:AbstractControl;
    city:AbstractControl;
    
    country:AbstractControl;
    pinCode:AbstractControl;
    role:AbstractControl;
    submitted=false;
    UserService: any;
  
    constructor(fb: FormBuilder,private userService:UserService) {
      this.userService.getUsers().subscribe(data=>{
        this.userArr=data
      })
      this.myForm = fb.group({
        'fName': ['',Validators.required],
        'sName': ['',Validators.required],
        'email': ['',Validators.required],
        'phoneNo': ['',Validators.required],
        'pwd': ['',Validators.required],
        'dob': ['',Validators.required],
        
        'hosNo': ['',Validators.required],
        'street': ['',Validators.required],
        'area': ['',Validators.required],
        'city': ['',Validators.required],
        
        'country': ['',Validators.required],
        'pinCode': ['',Validators.required],
        'role':['',Validators.required]
      });
      this.fName=this.myForm.controls['fName']
      this.sName=this.myForm.controls['sName']
      this.email=this.myForm.controls['email']
      this.phoneNo=this.myForm.controls['phoneNo']
      this.pwd=this.myForm.controls['pwd']
      this.dob=this.myForm.controls['dob']
      this.hosNo=this.myForm.controls['hosNo']
      this.street=this.myForm.controls['street']
      this.area=this.myForm.controls['area']
      this.city=this.myForm.controls['city']
      
      this.country=this.myForm.controls['country']
      this.pinCode=this.myForm.controls['pinCode']
      this.role=this.myForm.controls['role']
      // this.userArr=this.userService.getUsers()
      this.userService.getUsers().subscribe(data=>{
        this.userArr=data
    })
    }
  
    ngOnInit():void{
  
    }
    get f(){return this.myForm.controls}

    onChangeType(evt:any){
      
      console.log(evt.target.value)
      var idObtained=evt.target.value
      this.idUpdated=parseInt(idObtained.split(':')[1].trim());['1',' 1']

      for(var i=0;i<this.userArr.length;i++){
        if(this.idUpdated==this.userArr[i].id){
          this.user=this.userArr[i]
        }
      }

      this.myForm.get('id')?.setValue(this.user.id.toString())
      this.myForm.get('fName')?.setValue(this.user.first_name)
      this.myForm.get('sName')?.setValue(this.user.last_name)
      this.myForm.get('email')?.setValue(this.user.email)
      this.myForm.get('phoneNo')?.setValue(this.user.mobile)
      this.myForm.get('pwd')?.setValue(this.user.password)
      this.myForm.get('dob')?.setValue(this.user.dob)
      this.myForm.get('hosNo')?.setValue(this.user.address.house_No)
      this.myForm.get('street')?.setValue(this.user.address.street)
      this.myForm.get('area')?.setValue(this.user.address.area)
      this.myForm.get('city')?.setValue(this.user.address.city)
      this.myForm.get('country')?.setValue(this.user.address.country)
      this.myForm.get('pinCode')?.setValue(this.user.address.pincode)
      this.myForm.get('role')?.setValue(this.user.role)
    }
  
    onSubmit(value: string): void {
      this.submitted=true;
      if(this.myForm.invalid){
        return;
      }
      var tempId=0;
      // var maxId=0;
      // this.userArr.forEach(u =>{
      //   if(maxId < u.id){
      //     maxId=u.id;
      //   }
      // })
      tempId=this.idUpdated;
      // tempId=tempId+1;
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
  
      // this.UserService.updateUser(this.user)
      this.userService.updateUser(this.user).subscribe((data:User)=>{
        console.log(data)
      })
      
        this.myForm.reset();
      
    }
  
}
