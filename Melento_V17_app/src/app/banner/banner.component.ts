import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User_Jwt } from '../models/user_JWT';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  // template:"<h1>welcome all once again</h1>",
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  email:string | null=null;
  role:string | null=null;
  user_id:string | null=null;

  constructor(private courseService:CourseService){
    
  }

  ngOnInit(){
    this.role=localStorage.getItem('role')
    this.email=localStorage.getItem('email')
    this.user_id=localStorage.getItem('user_id')
  }

  clear(){
    localStorage.clear()
   alert("Log out Successful")
   location.reload()
  }
  
  loginUser_Jwt(username:string,password:string){
      let u = new User_Jwt(username,password)
      let msg = this.courseService.loginUser(u)
      console.log(msg)
  }
  registerUser_Jwt(username:string,password:string){
    let u = new User_Jwt(username,password) 
    this.courseService.registerUser(u).subscribe(data=>{
      console.log(data)
    })
  }
}
