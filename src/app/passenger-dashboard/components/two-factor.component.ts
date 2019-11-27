import {Component} from '@angular/core';

@Component({
  selector: 'two-factor',
  template:`
    Two factor works!
    <a routerLink="config-authenticator">Configure Authenticator</a>
    <a routerLink="reset-authenticator">Reset Authenticator</a>
  `
})

export class TwoFactorComponent {

}
