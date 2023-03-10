import { Component, OnInit, Renderer2 } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ScrollingService } from '../scrolling.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  formSended = false; 
  formSubmitted = false;
  loadingIdicatior = false; 
  errorMessage = false;
  timerColorOrange = false; 

  constructor(private renderer: Renderer2, private scrolling: ScrollingService) { }

  ngOnInit(): void {
    this.colorChangeSayHi();
  }

  colorChangeSayHi() {
    setInterval(() => {
      this.timerColorOrange = !this.timerColorOrange
    }, 2000);
  }

  labelToTop(label) {
    this.renderer.addClass(label, 'to-top');
  }

  async sendMail(form: NgForm) {
    //Ladeanimation anzeigen, dass gesendet wird 
    this.loadingIdicatior = true;
    this.formSubmitted = true; 

    //fill information into form
    const fd = new FormData();
    fd.append('name', form.value.name);
    fd.append('message', form.value.message);
    const promise =  fetch('https://vanessa-wuerdinger.de/assets/libs/send_mail/send_mail.php',
    {
      method: 'POST',
      body: fd
    });

    let [resp, err] = await this.resolve(promise)

    //setTimeout for user experience (spinner)
    setTimeout(() => {
      if(resp) {
        this.formSended = true;
      }
      if(err){
        this.errorMessage = true;
      }
      
      this.loadingIdicatior = false;
    }, 2000);
  }

  // returns the response/error of the promise
  async resolve(promise) {
    try {
      const response = await promise;
      return [response, null]
    } catch (e) {
      console.log(e);
      return [null, e];
    }
  }

  scrollTo(elementId: string) {
      this.scrolling.scrollTo(elementId);
  }
}
