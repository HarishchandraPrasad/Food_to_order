import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-usersview',
  templateUrl: './usersview.component.html',
  styleUrls: ['./usersview.component.scss']
})
export class UsersviewComponent {
//  @Input() users:User[]=[]
    users:User[]=[]
  
    constructor(private userservice:UserService,private router:Router){
        // this.users=this.userservice.getUsers()
        this.userservice.getUsers().subscribe(data=>{
          this.users=data
          console.log(this.users)
        })
    }

    // deleteUser(uid:number){
    //   this.userservice.deleteUser(uid)
    // }

    deleteUser(uid:number){
      this.userservice.deleteUser(uid).subscribe(data=>{
        console.log(data)
      })
    }


    viewDetails(uid:number){
      console.log('You wish to see the user details : '+uid)
      this.router.navigate(['users/'+uid])
    }
}