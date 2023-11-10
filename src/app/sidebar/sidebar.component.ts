import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ApiService } from './sidebar.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: "my-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent {
  @Input() isExpanded: boolean = false;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);
  pythonScript: string = '';
  constructor(private apiService: ApiService,private http: HttpClient,private router: Router) {}

  executeAPICallForDashboard() {
    this.apiService.callYourAPI().subscribe(
      response => {
        console.log('API call for Dashboard successful. Response:', response);
        // Handle the response if needed
  
        // After the API call is successful, navigate to the '/dash-embed' route
        this.router.navigate(['/dash-embed']);
      },
      error => {
        console.error('API call for Dashboard failed. Error:', error);
        // Handle errors
      }
    );
  }

  // executePythonScript() {
  //   const pythonScript = `
  //     # Your Python script content here
  //     print("Hello from Python script!")
  //   `;
    
  //   this.apiService.executePythonScript(pythonScript).subscribe(
  //     response => {
  //       console.log('Script executed successfully:', response);
  //       // Handle success, e.g., show a success message
  //     },
  //     error => {
  //       console.error('Error executing script:', error);
  //       // Handle error, e.g., show an error message
  //     }
  //   );
  // }

  // downloadCompiledFile(filename: string) {
  //   this.apiService.getCompiledPythonFile(filename).subscribe(
  //     response => {
  //       const blob = new Blob([response], { type: 'application/octet-stream' });
  //       const link = document.createElement('a');
  //       link.href = window.URL.createObjectURL(blob);
  //       link.download = filename;
  //       link.click();
  //     },
  //     error => {
  //       console.error('Error downloading file:', error);
  //       // Handle error, e.g., show an error message
  //     }
  //   );
  // }
}
