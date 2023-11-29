import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-header></app-header>
  <app-home></app-home>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
