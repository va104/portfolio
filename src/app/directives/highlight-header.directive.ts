import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightHeader]'
})
export class HighlightHeaderDirective {

  constructor(
    private elementRef: ElementRef, 
    private renderer: Renderer2) {}

  @HostListener('document:click', ['$event'])
  DocumentClick(event: Event) {
    if (this.elementRef.nativeElement.contains(event.target)) {
      this.renderer.removeClass(this.elementRef.nativeElement, 'mobile-non-hover')
      this.renderer.addClass(this.elementRef.nativeElement, 'mobile-color-hover')
      
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'mobile-color-hover')
      this.renderer.addClass(this.elementRef.nativeElement, 'mobile-non-hover')
    }
  }
}



