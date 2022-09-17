import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  @Input() hoverColor: string = 'White';

  constructor(private elRef: ElementRef) {}

  setBackgroundColor(color: string) {
    this.elRef.nativeElement.style.backgroundColor = color;
  }

  @HostListener('mouseover')
  onMouseEnter() {
    this.setBackgroundColor(this.hoverColor);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.setBackgroundColor('lightgreen');
  }
}