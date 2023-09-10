import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  productName: string;

  constructor(){
    this.productName="Laptop"
  }

  onSubmit(value: string): void{
    console.log("you submitted value: ",value)
  }

}
