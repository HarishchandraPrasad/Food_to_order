import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output-example',
  // templateUrl: './output-example.component.html',
  template:'<div><single-component (putRingOnIt)="dishAppreciated($event)"></single-component></div>',
  styleUrls: ['./output-example.component.scss']
})
export class OutputExampleComponent {
  
  constructor(){
    // let ee=new EventEmitter()
    // ee.subscribe(data=>{
    //   console.log('Hello'+data)
    // })
    // ee.emit("Harish")
   }

   dishAppreciated(evt:any){
    console.log("Hurrah..... Another dish was appreciated: "+evt)
   }
}


@Component({
  selector: 'single-component',
  // templateUrl: './output-example.component.html',
  template:'<div>Single Component Here..<button class="btn btn-primary" (click)="liked()">Appreciate the Dish</button></div>',
  styleUrls: ['./output-example.component.scss']
})
export class SingleComponent {
  @Output() putRingOnIt:EventEmitter<string>

  constructor(){
    this.putRingOnIt=new EventEmitter<string>()
  }

  liked(){
    this.putRingOnIt.emit("oh oh oh")
  }
}
