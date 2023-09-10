import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Address } from 'src/app/models/address';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  user:User=new User(0,'','','','','','',new Address(0,'','','','','',''),'user')
  constructor(private activatedRoute:ActivatedRoute,private userService:UserService){
    this.activatedRoute.params.subscribe((params:Params) =>{
      let id=params['id']
      console.log(id)
      // this.user=this.userService.getUserById(id)
      this.userService.getUserById(id).subscribe(data=>{
        this.user=data
      })
      console.log(this.user)
    })
  }

}
