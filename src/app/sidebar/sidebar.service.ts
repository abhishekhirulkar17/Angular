import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    private apiUrl = 'https://localhost:7230/api/GSTRecon/GetDashbordFinalCharts'; // Replace with your actual API URL

    constructor(private http: HttpClient) {}


    
  
    callYourAPI(): Observable<any> {
      return this.http.post(this.apiUrl, {});
    }

    // private apiUrl = 'https://localhost:44327/api/GSTRecon/GetDashbordFinalCharts';

    // constructor(private http: HttpClient) { }

    // executePythonScript(pythonScript: string): Observable<any> {
    //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
    //   return this.http.post<any>(`${this.apiUrl}/GetDashbordFinalCharts`, { pythonScript }, { headers });
    // }
  
    // getCompiledPythonFile(filename: string): Observable<any> {
    //   return this.http.get(`${this.apiUrl}/get/${filename}`, { responseType: 'arraybuffer' });
    // }
  }