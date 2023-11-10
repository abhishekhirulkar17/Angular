import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import {  BehaviorSubject,throwError, Observable } from 'rxjs';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl = 'https://localhost:7230/api/GSTRecon';  // base URL

  constructor(private http: HttpClient) { }

  private showCustomButtonSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);

  setShowCustomButton(show: boolean) {
    this.showCustomButtonSubject.next(show);
  }

  getShowCustomButton(): Observable<boolean> {
    return this.showCustomButtonSubject.asObservable();
  }

  importPurchases(): Observable<any> {
    return this.sendPostRequest(`${this.baseUrl}/uploadPR`, { "testKey": "testValue" }, { reportProgress: true });
  }

  // download2B(): Observable<any> {
  //   return this.sendPostRequest(`${this.baseUrl}/upload2B`, { "testKey": "testValue" });
  // }


  download2B(): Observable<any> {
    return this.sendPostRequest(`${this.baseUrl}/upload2B`, { "testKey": "testValue" }, { reportProgress: true });
  }

  startReconciliation(): Observable<any> {
    return this.sendPostRequest(`${this.baseUrl}/uploadReconciliation`, { "testKey": "testValue" }, { reportProgress: true });
  }

  // private sendPostRequest(url: string, body: any): Observable<any> {
  //   const headers = {
  //     'Content-Type': 'application/json',
  //     'Accept': 'application/json'
  //   };

  //   console.log("About to make the API call to", url);

  //   return this.http.post(url, body, { headers: headers }).pipe(
  //     catchError(this.handleError)
  //   );
  // }


  private sendPostRequest(url: string, body: any, options?: any): Observable<any> {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    console.log("About to make the API call to", url);

    return this.http.post(url, body, { headers, observe: 'events', ...options }).pipe(
      catchError(this.handleError)
    );
  }



  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error(`An error occurred: ${error.message}`);
    return throwError('Something went wrong; please try again later.');
  }
}
