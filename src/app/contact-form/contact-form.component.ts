import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  @ViewChild('myForm') myForm: ElementRef; 
  @ViewChild('nameField') nameField: ElementRef; 
  @ViewChild('messageField') messageField: ElementRef; 
  @ViewChild('mail') mail: ElementRef; 
  @ViewChild('sendButton') sendButton: ElementRef; 

  timerColorOrange = false; 

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.colorChangeSayHi();
  }
  
  colorChangeSayHi() {
    setInterval(() => {
      this.timerColorOrange = !this.timerColorOrange
    }, 2000);
  }

  labelToTop(label, input) {
    this.renderer.addClass(label, 'to-top');
    this.renderer.addClass(input, 'fix-border');
  }

  async sendMail(form: NgForm) {
    //action="https://vanessa-wuerdinger.de/send_mail/send_mail.php"
    //ftp://f015573b@vanessa-wuerdinger.de/vanessa-wuerdinger.de/assets/libs/send_mail/send_mail.php
    console.log('sending mail', form.value);
    // let nameField = this.nameField.nativeElement;
    // let messageField = this.messageField.nativeElement;
    // let mail = this.mail.nativeElement;
    // let sendButton = this.sendButton.nativeElement;
    // nameField.disabled = true;
    // messageField.disabled = true;
    // sendButton.disabled = true;
    //Ladeanimation anzeigen, dass gesendet wird 

    const fd = new FormData();
    fd.append('name', form.value.name);
    fd.append('message', form.value.message);
    // fd.append('mail', mail.value);
    await fetch('https://vanessa-wuerdinger.de/assets/libs/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd
      })

      //Text anzeigen, Nachricht gesendet.
    // nameField.disabled = false;
    // messageField.disabled = false;
    // sendButton.disabled = false;
  }


}
