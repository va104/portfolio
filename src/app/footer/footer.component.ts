import { Component, OnInit } from '@angular/core';
import { ScrollingService } from '../scrolling.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private scrolling: ScrollingService) { }

  ngOnInit(): void {
  }

  scrollTo(elementId: string) {
    this.scrolling.scrollTo(elementId);
  }
}
