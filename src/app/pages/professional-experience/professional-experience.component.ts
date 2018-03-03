import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'cv-professional-experience',
  templateUrl: './professional-experience.component.html',
  styleUrls: ['./professional-experience.component.scss']
})
export class ProfessionalExperienceComponent implements OnInit {

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
