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
import { HighlightImageDirective } from './about-me/highlight-image.directive';

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
    HighlightImageDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
