import { CssSelector } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
   color:string="";
   num:number=0;
    // color:string="";
    // fontSize:number=0;

    // style:{
    //   'background-color':string,
    //   'border-radius':string,
    //   border?:string,
    //   width?:string,
    //   height?:string
    // }={
    //   'background-color':'#ccc',
    //   'border-radius':'50px',
    //   'height':'30px',
    //   'width':'30px'
    // }
    isBordered:boolean=false;
    classesObj={
      bordered:false
    };
    classList: string[]=[];

    constructor(){
    //   this.color="blue"
    //   this.fontSize=26;
    //   this.style={
    //     'background-color':'#2f2',
    //   'border-radius':'50px',
    //   'height':'30px',
    //   'width':'30px'
    //   }

        this.isBordered=true;
        this.classList=['blue','round']
        this.toggleBorder();
    }

    toggleBorder(): void{
      this.isBordered=!this.isBordered;

      this.classesObj={
        bordered:this.isBordered
      }
    }

    toggleClass(cssClass:string):void{
      const pos:number=this.classList.indexOf(cssClass)
      if(pos>-1){
        this.classList.splice(pos,1)
      }else{
        this.classList.push(cssClass)
      }
    }

    // apply(color:string,fontSize:string):void{
    //   this.color=color;
    //   this.fontSize=parseInt(fontSize);
    // }
}
