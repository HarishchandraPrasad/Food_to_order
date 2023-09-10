import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-manual',
    templateUrl: './manualcomponent.component.html',
    // template:"<h1>welcome all once again</h1>",
    styleUrls: ['./manualcomponent.component.css']
  })

export class ManualComponent implements OnInit{

    constructor(){
        console.log("hello")
    }

    ngOnInit(): void {
        console.log("Manual Component was initialised")
    }

}