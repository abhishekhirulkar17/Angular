import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GstrprService {

  private apiUrl = 'https://localhost:7230/api/GSTRecon/getPR';  // replace with your API endpoint

  constructor(private http: HttpClient) { }

  PRdownloadDataFromGSTN(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);  // replace 'path-to-download-endpoint' with your endpoint
  }

}
