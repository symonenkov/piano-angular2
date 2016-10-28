import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>Our first component</h1> 
  <div>
    <a routerLink="/piano">piano</a>
    <a routerLink="/osc">cat</a>
  </div>
  <router-outlet></router-outlet>
  `
})
export class AppComponent { }
