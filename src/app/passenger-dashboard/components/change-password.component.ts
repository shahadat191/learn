import {Component} from '@angular/core';


@Component({
  selector: 'change-password',
  template:`
      <nav mat-tab-nav-bar class = "nav">
          <a mat-tab-link routerLink="/two-factor" routerLinkActive = "active" >Two Factor Authentication</a>
      </nav> 
    <router-outlet></router-outlet>
  `
})

export class ChangePasswordComponent {

}
