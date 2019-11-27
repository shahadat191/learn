import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

// containers
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';

// components
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import {PassengerFormComponent} from './components/passenger-form/passenger-form.component';
import {ChangePasswordComponent} from './components/change-password.component';
import {TwoFactorComponent} from './components/two-factor.component';

// service
import { PassengerDashboardService } from './passenger-dashboard.service';
import {ConfigAuthenticatorComponent} from './components/config-authenticator.component';
import {ResetAuthenticatorComponent} from './components/reset-authenticator.component';
import {ResetConfirmedComponent} from './components/reset-confirmed.component';
import {AngularMaterialModule} from '../angular-material.module';
import {AccountSettingsComponent} from './components/account-settings.component';


const routes: Routes = [
  {path: '', redirectTo: 'account-settings', pathMatch: 'full'},
  {path: 'account-settings', component: AccountSettingsComponent, pathMatch: 'full'},
  {path: 'change-password', component: ChangePasswordComponent, pathMatch: 'full'},
  {path: 'two-factor', children: [
      {path: '', component: TwoFactorComponent, pathMatch: 'full'},
      {path: 'config-authenticator', component: ConfigAuthenticatorComponent, pathMatch: 'full'},
      {path: 'reset-authenticator', children: [
          {path: '', component: ResetAuthenticatorComponent, pathMatch: 'full'},
          {path: 'reset-confirmed', component: ResetConfirmedComponent, pathMatch: 'full'}
        ]}
    ]}
]

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerViewerComponent,
    PassengerCountComponent,
    PassengerDetailComponent,
    PassengerFormComponent,
    ChangePasswordComponent,
    TwoFactorComponent,
    ConfigAuthenticatorComponent,
    ResetAuthenticatorComponent,
    ResetConfirmedComponent,
    AccountSettingsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes),
    AngularMaterialModule
  ],
  providers: [
    PassengerDashboardService
  ]
})
export class PassengerDashboardModule {}
