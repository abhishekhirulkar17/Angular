import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forget-password-otp',
  templateUrl: './forget-password-otp.component.html',
  styleUrls: ['./forget-password-otp.component.scss']
})
export class ForgetPasswordOtpComponent {
  focusNext(currentInput: HTMLInputElement, nextInput?: HTMLInputElement) {
    if (currentInput.value.length && nextInput) {
        nextInput.focus();
    }
}

onKeyDown(event: KeyboardEvent, currentInput: HTMLInputElement, previousInput?: HTMLInputElement, nextInput?: HTMLInputElement) {
    if (event.key === 'Backspace' && currentInput.value === '') {
        if (previousInput) {
            previousInput.focus();
            previousInput.value = '';  // Clear the value of previous input if required
        }
        event.preventDefault();  // To prevent the default behavior
    } else {
        this.focusNext(currentInput, nextInput);
    }
}
submitOtp() {
  // Your code to validate and submit the OTP, for instance:
  this.requestPasswordOTP();
}
  constructor(private router: Router) { }

  requestPasswordOTP() {
        this.router.navigate(['/newpassword']);
    
}
}
