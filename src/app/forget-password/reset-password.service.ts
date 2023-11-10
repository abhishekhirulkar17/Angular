import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs'; 
@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

//   private apiUrl = 'YOUR_BACKEND_API_URL'; // Replace with your actual backend API URL

//   constructor(private http: HttpClient) { }

//   requestPasswordReset(email: string): Observable<any> {
//     const url = `${this.apiUrl}/reset-password-request`; // Replace with your endpoint
//     return this.http.post(url, { email: email });
//   }
// }
requestPasswordReset(email: string) {
    const hardcodedEmail = "abhishekhirulkar12@gmail.com";  // replace with your hardcoded email
    
    if (email === hardcodedEmail) {
      // Simulate a successful API call with 'of'
      return of({ success: true, message: 'Password reset email sent!' });
    } else {
      // Simulate a failed API call with 'throwError'
      return throwError('Invalid email address.');
    }
  }
}