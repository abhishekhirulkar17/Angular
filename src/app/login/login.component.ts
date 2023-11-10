import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';  // Ensure the path is correct

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isLoading: boolean = false;
  username: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) { }

  login() {
    this.isLoading = true;
    this.authService.loginUser(this.username, this.password).subscribe(
        response => {

          console.log(response);
            if (response && response.message === "Login successful.") {
                this.router.navigate(['/dashboard']);
                this.isLoading = false;

                
            } else {
                alert(response.message || 'Authentication failed.');
            }
        },
        error => {
          this.isLoading = false;
            alert('Error occurred during login.');
            
        }
    );
  }
}
