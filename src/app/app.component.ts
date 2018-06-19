import {animate, animation, style, transition, trigger} from '@angular/animations';
import {Component} from '@angular/core';

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
export class AppComponent {

  constructor() {}

  prepareRouteTransition(outlet) {
    const animation = outlet.activatedRouteData['animation'] || {};
    return animation['value'] || null;
  }


}


