import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cv-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {
  date: Date;
  constructor() {
  }
  ngOnInit() {
    this.date = new Date();
  }
}
