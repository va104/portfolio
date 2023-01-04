import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightImage]'
})
export class HighlightImageDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @Input('appHighlightImage') hoverClass: any;

  @HostListener('mouseenter') onMouseEnter() {
      this.elementRef.nativeElement.classList.add(this.hoverClass);
  }

  @HostListener('mouseleave') onMouseLeave() {
      this.elementRef.nativeElement.classList.remove(this.hoverClass);
  }
}
