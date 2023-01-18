import { ViewportScroller } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollingService {

  offsetScrolling = 100;

  constructor(private viewportScroller: ViewportScroller) { }

  scrollTo(elementId: string, addOffset?: number) {
    if(addOffset) {
      this.offsetScrolling = addOffset;
    }
    this.viewportScroller.setOffset([0, this.offsetScrolling]);

    setTimeout(() => {
      this.viewportScroller.scrollToAnchor(elementId);
    }, 100);
  }
}
