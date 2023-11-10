import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // <-- Add this import
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { ThankYouPopupComponent } from './thank-you-popup/thank-you-popup.component';
import { ForgetPasswordOtpComponent } from './forget-password-otp/forget-password-otp.component';
import { SetNewPasswordComponent } from './set-new-password/set-new-password.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Gstr2bComponent } from './gstr2b/gstr2b.component';
import { GstrprComponent } from './gstrpr/gstrpr.component';
import { FinaloutputComponent } from './finaloutput/finaloutput.component';
import { CustomHeaderComponent } from './custom-header/custom-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { LoadingComponent } from './loading';
import { DashEmbedComponent } from './dash-embed/dash-embed.component';
import { TabPageComponent } from './tab-page/tab-page.component'
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    ForgetPasswordComponent,
    EmailVerificationComponent,
    ThankYouPopupComponent,
    ForgetPasswordOtpComponent,
    SetNewPasswordComponent,
    SidebarComponent,
    Gstr2bComponent,
    GstrprComponent,
    FinaloutputComponent,
    CustomHeaderComponent,
    LoadingComponent,
    DashEmbedComponent,
    TabPageComponent,
     // <-- You missed this one in the declarations array
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTabsModule,
    MatIconModule,// <-- Add this line
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
