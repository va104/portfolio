import { Component, OnInit } from '@angular/core';
import { ScrollingService } from '../scrolling.service';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {

  toggleMenu = false;
   timerColorOrange = false; 

  constructor(private scrolling: ScrollingService) { }

  ngOnInit(): void {
    this.colorChangeSayHi();
  }

  openMenu() {
    this.toggleMenu = !this.toggleMenu
  }
  
  colorChangeSayHi() {
    setInterval(() => {
      this.timerColorOrange = !this.timerColorOrange
    }, 2000);
  }
  
  // add additional Paremeter because of the padding in the skill section
  scrollTo(elementId: string, offset?: number) {
    setTimeout(() => {
      this.toggleMenu = !this.toggleMenu
    }, 200);
    this.scrolling.scrollTo(elementId, offset);
  }
}
