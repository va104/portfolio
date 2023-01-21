import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollingService } from '../scrolling.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {

  toggleMenu = false;
  timerColorOrange = false; 
  isMobile = false; 
  translation: TranslateService;

  constructor(
    private scrolling: ScrollingService, 
    private router: Router,
    private translate : TranslateService) { }

  ngOnInit(): void {
    this.colorChangeSayHi();
    this.translation = this.translate; 
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
    this.router.navigate(['/'])
    setTimeout(() => {
      this.openCloseMenu();
    }, 300);
  }
}
