import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Gstr2bService {
  
  constructor(private http: HttpClient) { }
  onButtonClick() {
    console.log('Button clicked! Trying to call API...');
    this.dataService.importPurchases().subscribe(
      response => {
          console.log('Response:', response);
      },
      error => {
          console.error('Error:', error);
      }
  );
      
  this.router.navigate(['/gstrpr']);
  }



  Clickdownload2B() {
    console.log('Button clicked! Trying to call API...');
    this.dataService.download2B().subscribe(
      response => {
          console.log('Response:', response);
      },
      error => {
          console.error('Error:', error);
      }
  );
      
  this.router.navigate(['/gstr2b']);
  }


  ClickstartReconciliation() {
    console.log('Button clicked! Trying to call API...');
    this.dataService.startReconciliation().subscribe(
      response => {
          console.log('Response:', response);
      },
      error => {
          console.error('Error:', error);
      }
  );
      
  this.router.navigate(['/tab-page']);
  }

}