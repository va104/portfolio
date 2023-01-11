import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { HeaderComponent } from './header/header.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { FooterComponent } from './footer/footer.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { HighlightHeaderDirective } from './directives/highlight-header.directive';
import { MyWorkMobileComponent } from './my-work-mobile/my-work-mobile.component';
import { ObserveElementDirective } from './directives/observe-element.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MyWorkComponent,
    HeaderComponent,
    LegalNoticeComponent,
    FooterComponent,
    AboutMeComponent,
    ContactFormComponent,
    MySkillsComponent,
    HighlightHeaderDirective,
    MyWorkMobileComponent,
    ObserveElementDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
