import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  @ViewChild('myForm') myForm: ElementRef; 
  @ViewChild('nameField') nameField: ElementRef; 
  @ViewChild('messageField') messageField: ElementRef; 
  @ViewChild('sendButton') sendButton: ElementRef; 
  constructor() { }

  ngOnInit(): void {
  }

  async sendMail() {
    //action="https://vanessa-wuerdinger.de/send_mail/send_mail.php"
    //ftp://f015573b@vanessa-wuerdinger.de/vanessa-wuerdinger.de/assets/libs/send_mail/send_mail.php
    console.log('sending mail', this.myForm);
    let nameField = this.nameField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;
    nameField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;
    //Ladeanimation anzeigen, dass gesendet wird 

    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('message', messageField.value);
    await fetch('https://vanessa-wuerdinger.de/assets/libs/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd
      })

      //Text anzeigen, Nachricht gesendet.
    nameField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;
  }

}
