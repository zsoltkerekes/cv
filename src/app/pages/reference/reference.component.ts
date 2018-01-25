import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'cv-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss']
})
export class ReferenceComponent implements OnInit {

  constructor(
    private title: Title,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.title.setTitle(this.activatedRoute.snapshot.data['pageTitle']);
  }
}

