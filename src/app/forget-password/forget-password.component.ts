import { Component } from '@angular/core';
import { ResetPasswordService } from './reset-password.service'; // Adjust the path if needed
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  userEmail: string = '';

  constructor(private resetPasswordService: ResetPasswordService, private router: Router) { }

//   requestPasswordReset() {
//     if (!this.userEmail) {
//       alert('Please provide an email address.');
//       return;
//     }

//     this.resetPasswordService.requestPasswordReset(this.userEmail).subscribe(
//       response => {
//         if (response && response.success) {
//           // Navigate to another component or show a success message
//           this.router.navigate(['/enterotp']); // if you want to navigate to OTP page after sending reset email
//         } else {
//           alert(response.message || 'Failed to send reset password email.');
//         }
//       },
//       error => {
//         alert('Error occurred during the reset password request.');
//       }
//     );
//   }
// }

requestPasswordReset() {
  if (!this.userEmail) {
    alert('Please provide an email address.');
    return;
  }

  this.resetPasswordService.requestPasswordReset(this.userEmail).subscribe(
    response => {
      if (response && response.success) {
        // Navigate to another component or show a success message
        this.router.navigate(['/enterotp']);
      } else {
        alert(response.message || 'Failed to send reset password email.');
      }
    },
    error => {
      alert(`Error: ${error}`);
    }
  );
}}