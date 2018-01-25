import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'cv-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor(
    private title: Title,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.title.setTitle(this.activatedRoute.snapshot.data['pageTitle']);
  }
}
