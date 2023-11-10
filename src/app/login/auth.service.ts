import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://localhost:7230/api/GSTRecon'; 

  constructor(private http: HttpClient) { }

  loginUser(username: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/userLogin`;

    // Using the structure from Swagger
    const body = {
        id: 0, // Assuming this is not required for login and can be hardcoded
        name: username,
        email: "", // Assuming email is not required for login
        mobileNo: "", // Assuming mobileNo is not required for login
        password: password
    };

    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    return this.http.post(url, body, { headers: headers }).pipe(
        catchError(error => {
            console.error('Error:', error);
            return throwError(error);
        })
    );
}

}
