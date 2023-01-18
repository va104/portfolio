import { Component, OnInit } from '@angular/core';
import { ScrollingService } from '../scrolling.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor(private scrolling: ScrollingService) { }

  ngOnInit(): void {
  }

  scrollTo(elementId: string) {
    this.scrolling.scrollTo(elementId);
  }
}
