import { Component, OnInit } from '@angular/core';
import { SmoothScrollService } from '../../shared/services/smooth-scroll.service';

@Component({
  selector: 'cv-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {
  date: Date;
  constructor(
    public scroll: SmoothScrollService
  ) {
  }
  ngOnInit() {
    this.date = new Date();
  }


}
