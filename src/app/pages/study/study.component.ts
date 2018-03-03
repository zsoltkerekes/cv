import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cv-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.scss']
})
export class StudyComponent implements OnInit {

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
