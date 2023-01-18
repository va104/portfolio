import { ViewportScroller } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollingService {

  constructor(private viewportScroller: ViewportScroller) { }

  scrollTo(elementId: string) {
    this.viewportScroller.setOffset([0,100]);

    setTimeout(() => {
      this.viewportScroller.scrollToAnchor(elementId);
    }, 100);
  }
}
