import {Component} from '@angular/core';


@Component({
  selector: 'account-settings',
  template:`
      <nav mat-tab-nav-bar class = "nav">
          <a mat-tab-link routerLink="/two-factor" routerLinkActive = "active" >Two Factor Authentication</a>
          <a mat-tab-link routerLink="/change-password" routerLinkActive = "active"> Change Password</a>
      </nav>
      <router-outlet></router-outlet>
  `
})

export class AccountSettingsComponent {

}
