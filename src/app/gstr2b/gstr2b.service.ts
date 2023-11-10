import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Gstr2bService {

  private apiUrl = 'https://localhost:7230/api/GSTRecon/get2B';  // replace with your API endpoint

  constructor(private http: HttpClient) { }

  downloadDataFromGSTN(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);  // replace 'path-to-download-endpoint' with your endpoint
  }

  // uploadData() {
  //   return this.http.post('https://localhost:7230/api/GSTRecon/upload2B', {});  // {} denotes an empty payload. Adjust if needed.
  // }
  
}
