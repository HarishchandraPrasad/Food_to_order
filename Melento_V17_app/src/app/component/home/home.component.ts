import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  choice:number=0;
  
  constructor(private router:Router ){
    this.choice=1
  }

  viewDetails(){
    this.router.navigate(['restaurants'])
  }
  viewCart(){
    this.router.navigate(['cartView'])
  }

  nextChoice():void{
    this.choice +=1
    if(this.choice>5){
      this.choice =1
    }
  }
}
