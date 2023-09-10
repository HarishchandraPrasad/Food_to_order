import { Component } from '@angular/core';
import { User } from '../models/user';
import { Address } from '../models/address';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  // restaurant_name:string="Ganesh Food Center"
  // arrRestaurants:string[]=["Ganesh Food Center","chandu","Dosa cenetr"]
  arrRestaurants:[string[],string[],string[]]=[["ITC","Mvm","Closed","assets/images/dosa.jpeg"],["ITC","Mvm","Closed","assets/images/Ganesh.jpeg"],["ITC","Mvm","Closed","assets/images/background.jpeg"]]
  arrUsers:User[]=[
                  new User(1,"Harish","chandu","12/24/2000","harish@hmail.com","harish1234","12345678",
                  new Address(1,'23','8th Main','Mvm','Blr','India',"532216"),"user"),
                  new User(2,"Prasad","chandu","12/24/2000","prasad@hmail.com","prasad1234","12345678",
                  new Address(1,'23','8th Main','Mvm','Blr','India',"532216"),"user")]
}
