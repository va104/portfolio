import { Component, OnInit } from '@angular/core';
import { ScrollingService } from '../scrolling.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private scrolling: ScrollingService) { }

  ngOnInit(): void {
  }

  scrollTo(elementId: string) {
    this.scrolling.scrollTo(elementId);
  }
}
