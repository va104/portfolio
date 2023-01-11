import { Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { debounceTime, Observable, Subscription } from 'rxjs';

@Directive({
  selector: '[appObserveElement]',
  exportAs: 'intersectionExport',
})
export class ObserveElementDirective {

  @Input() root: HTMLElement | null = null //target element
  @Input() rootMargin = '0px 0px 0px 0px' // calculate the margin from the root until its loading
  @Input() threshold = 0 // 0 - 1 --> at what percentage the callback is executed (0 = first pixel visible)
  @Input() debounceTime = 250 // tells us when the user has stopped scrolling
  @Input() isContinuous = false //flag that we use to decide whether we want to continue observing an element for visibility changes

  @Output() isIntersectingEmitter = new EventEmitter<boolean>() //emits an event that tells us if the element is intersecting

  _isIntersecting = false //a public property that we use to trigger changes to the template
  subscription: Subscription

  constructor (private element: ElementRef) {}

  ngOnInit () {
    this.subscription = this.createAndObserve()
  }

  ngOnDestroy () {
    this.subscription.unsubscribe()
  }

  createAndObserve () {
    const options: IntersectionObserverInit = {
      root: this.root,
      rootMargin: this.rootMargin,
      threshold: this.threshold,
    }

    return new Observable<boolean>(subscriber => {
      const intersectionObserver = new IntersectionObserver(entries => {
        const { isIntersecting } = entries[0]
        subscriber.next(isIntersecting)

        isIntersecting &&
          !this.isContinuous &&
          intersectionObserver.disconnect()
      }, options)

      intersectionObserver.observe(this.element.nativeElement)

      return {
        unsubscribe () {
          intersectionObserver.disconnect()
        },
      }
    })
      .pipe(debounceTime(this.debounceTime))
      .subscribe(status => {
        this.isIntersectingEmitter.emit(status)
        this._isIntersecting = status
      })
  }
}
