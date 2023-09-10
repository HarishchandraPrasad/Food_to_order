import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';


export function skuValidator(nameRe: RegExp):ValidatorFn{
  return (control:AbstractControl):ValidationErrors | null =>{
    if(!control.value.match(/^123/)){
      return {invalidSku:true}
    }
  return null 
  };
}

@Component({
  selector: 'app-custom-validation',
  templateUrl: './custom-validation.component.html',
  styleUrls: ['./custom-validation.component.scss']
})
export class CustomValidationComponent {
  myForm:FormGroup
  sku:AbstractControl;

  constructor(fb: FormBuilder){
    this.myForm = fb.group({
      'sku': ['',Validators.compose([
        Validators.required,
        skuValidator(/^123/i)])]
    });
    this.sku=this.myForm.controls['sku']
  }
  onSubmit(value: string): void {
    console.log(this.myForm.controls['sku'] );
    console.log('you submitted value: ', value);
  }

}
