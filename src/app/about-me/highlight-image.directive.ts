import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightImage]'
})
export class HighlightImageDirective {
  showHighlight = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  // @Input('appHighlightImage') hoverClass: any;

  // @HostListener('click') onClick() {
  //   if (!this.showHighlight) {
  //     this.renderer.addClass(this.elementRef, this.hoverClass);
  //   } else {
  //     this.renderer.removeClass(this.elementRef, this.hoverClass);
  //   }
  //   this.showHighlight = !this.showHighlight
  // }

  // @HostListener('touchmove') onTouchMove() {
  //     this.elementRef.nativeElement.classList.add(this.hoverClass);
  // }
}



