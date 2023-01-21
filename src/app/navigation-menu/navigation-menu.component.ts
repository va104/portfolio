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
  isMobile = false; 

  constructor(private scrolling: ScrollingService) { }

  ngOnInit(): void {
    this.colorChangeSayHi();
  }

  openCloseMenu() {
    const body = document.getElementsByTagName('body')[0];
    this.isMobile = false;
    this.toggleMenu = !this.toggleMenu;
    if(window.innerWidth <= 500) {
      this.isMobile = true;
    }

    if(this.isMobile && this.toggleMenu) {
      body.style.overflowY = "hidden";
      console.log('hidden')
    }
    
    if(!this.toggleMenu) {
      body.style.overflowY = "unset";
      console.log('unset')
    }
  }
  
  colorChangeSayHi() {
    setInterval(() => {
      this.timerColorOrange = !this.timerColorOrange
    }, 2000);
  }
  
  // add additional Paremeter because of the padding in the skill section
  scrollTo(elementId: string, offset?: number) {
    this.scrolling.scrollTo(elementId, offset);
  }

  closeMenu(){
    setTimeout(() => {
      this.openCloseMenu();
    }, 300);
  }
}
