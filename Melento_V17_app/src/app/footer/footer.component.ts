import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  email:string | null=null;
  role:string | null=null;
  user_id:string | null=null;

  constructor(){
    
  }

  ngOnInit(){
    this.role=localStorage.getItem('role')
    this.email=localStorage.getItem('email')
    this.user_id=localStorage.getItem('user_id')
  }
}
