import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cv-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  links: { routerLink: string, anchorText: string }[];

  constructor() { }

  ngOnInit() {
    this.links = [
      { routerLink: '/about-me', anchorText: 'About Me' },
      { routerLink: '/reference', anchorText: 'Reference' },
      { routerLink: '/professional-experience', anchorText: 'Professional Experience' },
      { routerLink: '/study', anchorText: 'Study' },
      { routerLink: '/contacts', anchorText: 'Contacts' }
    ];
  }

}
