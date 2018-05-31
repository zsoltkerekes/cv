import {animate, animation, style, transition, trigger} from '@angular/animations';
import {Component, OnInit, ViewChild} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

const slideAnimation = animation([
  style({opacity: .3, position: 'absolute', left: 0, right: 0, transform: 'translate3d(40%,0,0)'}),
  animate('600ms ease-in-out', style({opacity: 1, transform: 'translate3d(17.5%,0,0)'}))
]);

@Component({
  selector: 'cv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routerAnimations', [
      transition('* <=> *', slideAnimation),
    ])
  ]
})
export class AppComponent implements OnInit {

  cookieLawSeen: boolean;

  @ViewChild('cookieLaw')
  cookieLawEl: any;

  constructor(public router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        (<any>window).ga('set', 'page', event.urlAfterRedirects);
        (<any>window).ga('send', 'pageview');
      }
    });
  }

  prepareRouteTransition(outlet) {
    const animation = outlet.activatedRouteData['animation'] || {};
    return animation['value'] || null;
  }

  ngOnInit() {
    this.cookieLawSeen = this.cookieLawEl.cookieLawSeen;
  }

}


