import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo-reactive-form',
  templateUrl: './demo-reactive-form.component.html',
  styleUrls: ['./demo-reactive-form.component.scss']
})
export class DemoReactiveFormComponent {
  myForm: FormGroup;
  sku: any;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['',Validators.required]
    });
    this.sku=this.myForm.controls['sku']
  }

  ngOnInit() { 

    
  }
  onSubmit(value: string): void {
    console.log(this.myForm.controls['sku'] );
    console.log('you submitted value: ', value);
  }



}
