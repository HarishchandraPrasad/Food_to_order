import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent {
  email: string;
  password: string;
  user_id:number

  users:User[]=[]
  constructor(private userService:UserService,private router:Router){
    this.email=""
    this.password=""
    this.user_id=0
    //this.users=this.userService.getUsers()
    this.userService.getUsers().subscribe(data=>{
      this.users=data
    })
  }

  onSubmit(value: any): void{
    console.log("you submitted value: ",value)
    let flag=false;
    for(let i=0;i<this.users.length;i++){
      if(this.email==this.users[i].email && this.password==this.users[i].password){
        localStorage.setItem("email",this.users[i].email);
        localStorage.setItem("role",this.users[i].role);
        localStorage.setItem("user_id",this.users[i].id.toString());
        location.reload()
        alert("Login Successfully");
        // let u=new User(value.number,value.)
        // this.userService.loginUser(value)
        flag=true;
        break;
      }
  
  }

  }
}
