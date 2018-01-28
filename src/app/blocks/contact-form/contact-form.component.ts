import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'cv-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  formSubmitted: boolean;

  @ViewChild('form') form: NgForm;

  name: string;
  email: string;
  message: string;

  constructor() { }

  ngOnInit() {
    this.formSubmitted = false;
    this.name = '';
    this.email = '';
    this.message = '';
  }

  onSubmit() {
    const sendEmail = `mailto:kerekes.zsolt.job@gmail.com?subject=Letter from ${this.name} via ${this.email}` +
      '&body=' + this.message;
    this.formSubmitted = true;
    alert(`So.. this is served from Github pages..
Which means no server side script to send an email.
So, sending this via your computer.`);
    window.open(sendEmail);
  }

}
