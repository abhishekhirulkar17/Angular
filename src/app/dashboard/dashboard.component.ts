import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
    sidebarExpanded: boolean = true;
    isLoading: boolean = false;
    showCustomButton: boolean = false;
    // loadingProgress: number = 0; // Progress percentage

    icon1 = 'ri-checkbox-circle-fill';
    icon2 = 'ri-checkbox-circle-fill';
    icon3 = 'ri-refresh-fill';

    constructor(private ref: ChangeDetectorRef, private router: Router, private dataService: DataService) { }

    getCurrentMonth(): string {
        const months = [
          'January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December'
        ];
    
        const currentDate = new Date();
        const currentMonth = months[currentDate.getMonth()];
    
        return currentMonth;
      }

    Clickdownload2B() {
        this.isLoading = true;
        // this.loadingProgress = 0; // Initialize the progress to 0
        this.icon1 = 'ri-checkbox-circle-fill';
        this.dataService.download2B().subscribe(
            (event: HttpEvent<any>) => {
                if (event.type === HttpEventType.UploadProgress) {
                    // Check if event.total exists before using it
                    // this.loadingProgress = event.total ? Math.round((100 * event.loaded) / event.total) : 0;
                } else if (event.type === HttpEventType.Response) {
                    // Loading is complete when the response is received
                    // this.isLoading = false;
                    this.router.navigate(['/gstr2b']);
                    this.isLoading = false;
                }
            },
            error => {
                console.error('Error:', error);
                this.isLoading = false;
            }
        );
    }
    

    onButtonClick() {
        console.log('Button clicked! Trying to call API...');
        this.isLoading = true;
        // this.loadingProgress = 0; // Initialize the progress to 0
        this.icon2 = 'ri-checkbox-circle-fill';
        this.dataService.importPurchases().subscribe(
            (event: HttpEvent<any>) => {
                if (event.type === HttpEventType.UploadProgress) {
                    // Check if event.total exists before using it
                  // this.loadingProgress = event.total ? Math.round((100 * event.loaded) / event.total) : 0;
                } else if (event.type === HttpEventType.Response) {
                    // Loading is complete when the response is received
                    // this.isLoading = false;
                    this.router.navigate(['/gstrpr']);
                    this.isLoading = false;
                }
            },
            error => {
                console.error('Error:', error);
                this.isLoading = false;
            }
        );
    }
    
    ngOnInit() {
        this.dataService.getShowCustomButton().subscribe((show) => {
          this.showCustomButton = show;
        });
      }
    
      ClickstartReconciliation() {
        console.log('Button clicked! Trying to call API...');
        this.isLoading = true;
        this.icon3 = 'ri-checkbox-circle-fill';
        this.dataService.startReconciliation().subscribe(
          (event: HttpEvent<any>) => {
            if (event.type === HttpEventType.UploadProgress) {
              // Check if event.total exists before using it
              // this.loadingProgress = event.total ? Math.round((100 * event.loaded) / event.total) : 0;
            } else if (event.type === HttpEventType.Response) {
              // Loading is complete when the response is received
              console.log(event);
              this.router.navigate(['/tab-page']);
              this.isLoading = false;
              this.dataService.setShowCustomButton(true);
            }
          },
          error => {
            console.error('Error:', error);
            this.isLoading = false;
          }
        );
      }
    
      showGraphs() {
        // Handle the functionality for the "Graphs" button here
      }
    }
    


    // Clickdownload2B() {
    //     this.isLoading = true;
    //     this.dataService.download2B().subscribe(
    //       response => {
    //           console.log('Response:', response);
    //           this.isLoading = false;
    //           this.router.navigate(['/gstr2b']);
    //       },
    //       error => {
    //           console.error('Error:', error);
    //           this.isLoading = false;
    //       }
    //     );
    // }

    // onButtonClick() {
    //     console.log('Button clicked! Trying to call API...');
    //     this.isLoading = true;

    //     this.dataService.importPurchases().subscribe(
    //         response => {
    //             console.log('Response:', response);
    //             this.isLoading = false;
    //             this.router.navigate(['/gstrpr']);
    //         },
    //         error => {
    //             console.error('Error:', error);
    //             this.isLoading = false;
    //         }
    //     );
    // }
      
    // ClickstartReconciliation() {
    //     this.isLoading = true;
    //     this.dataService.startReconciliation().subscribe(
    //       response => {
    //           console.log('Response:', response);
    //           this.isLoading = false;
    //           this.router.navigate(['/tab-page']);
    //       },
    //       error => {
    //           console.error('Error:', error);
    //           this.isLoading = false;
    //       }
    //     );
    // }



    

