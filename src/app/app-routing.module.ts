import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ForgetPasswordOtpComponent } from './forget-password-otp/forget-password-otp.component';
import { SetNewPasswordComponent } from './set-new-password/set-new-password.component';
import { ThankYouPopupComponent } from './thank-you-popup/thank-you-popup.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { Gstr2bComponent } from './gstr2b/gstr2b.component';
import { GstrprComponent } from './gstrpr/gstrpr.component';
import { FinaloutputComponent } from './finaloutput/finaloutput.component';
import { DashEmbedComponent } from './dash-embed/dash-embed.component';
import { TabPageComponent } from './tab-page/tab-page.component'

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forgetpassword', component: ForgetPasswordComponent },
  { path: 'enterotp', component: ForgetPasswordOtpComponent },
  { path: 'newpassword', component: SetNewPasswordComponent },
  { path: 'thankyou', component: ThankYouPopupComponent },
  { path: 'verification', component: EmailVerificationComponent },
  { path: 'gstr2b', component: Gstr2bComponent },
  { path: 'gstrpr', component: GstrprComponent },
  { path: 'finaloutput', component: FinaloutputComponent },
  { path: 'dash-embed', component: DashEmbedComponent },
  { path: 'tab-page', component: TabPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
