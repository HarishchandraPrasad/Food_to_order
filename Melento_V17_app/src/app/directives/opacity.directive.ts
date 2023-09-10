import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appOpacity]'
})
export class OpacityDirective {

  constructor(private el: ElementRef) { }

  @Input('appOpacity') opacityNum:number=0

  @HostListener('mouseenter') onMouseEnter() {
    this.opacity(this.opacityNum ||  0.5);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.opacity(1);
  }
  private opacity(num:number){
    this.el.nativeElement.style.opacity=num
  }
}
