import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'cv-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss']
})
export class ReferenceComponent implements OnInit {
  @Input() currentState;

  constructor(
    private title: Title,
    private activatedRoute: ActivatedRoute
  ) {
    document.documentElement.scrollTop = 0;
  }

  ngOnInit() {
    this.title.setTitle(this.activatedRoute.snapshot.data['pageTitle']);
  }
}

