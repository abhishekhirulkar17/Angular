import { Component } from '@angular/core';
import { Gstr2bService } from './gstr2b.service';  // adjust the path if needed
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gstr2b',
  templateUrl: './gstr2b.component.html',
  styleUrls: ['./gstr2b.component.scss']
})
// export class Gstr2bComponent {
//   sidebarExpanded = true;

//   constructor(private gstr2bService: Gstr2bService) { }

//   onDownloadClick() {
//     this.gstr2bService.downloadDataFromGSTN().subscribe(
//       data => {
//         console.log("clicked");
        
//         console.log(data);

//         // Handle the data, update the UI or whatever needed
//       },
//       error => {
//         console.error('Error fetching data', error);
//       }
//     );
//   }
// }

export class Gstr2bComponent {
  showTable: boolean = false;

  sidebarExpanded = true;
  displayedColumns: string[] = [
    'gstrLogId', 'customerGSTIN', 'supplierGSTIN', 'tradeName', 'invoiceNumber', 
    'invoiceType', 'invoiceDate', 'invoiceValue', 'placeOfSupply', 
    'supplyAttractReverseCharge', 'ratePercentage', 'taxableValue', 'igst', 
    'cgst', 'sgst', 'ugst', 'cess', 'gstrPeriod', 'gstrFilingDate', 
    'itcAvailability', 'reason', 'applicablePercOfTaxRate', 'source', 'irn', 
    'irnDate', 'createdOn', 'createdBy'
];

// You would also populate your dataSource here with your API call or service.
dataSource = [];  // This should hold the actual data retrieved for the table.

constructor(private gstr2bService: Gstr2bService, private cd: ChangeDetectorRef,private router: Router) { }

onBackClick(): void {
  this.router.navigate(['/dashboard']); // Replace 'previousRoute' with the path you want to navigate to when the "Back" button is clicked.
}



// onUploadFromDevice() {
//   this.gstr2bService.uploadData().subscribe(
//       data => {
//           console.log('Data uploaded:', data);
//       },
//       error => {
//           console.error('Error uploading data', error);
          
//       }
//   );
// }
  onDownloadClick() {
    this.gstr2bService.downloadDataFromGSTN().subscribe(
        data => {
            console.log(data);  // Debug line to check your data.
            this.dataSource = data;
            this.cd.detectChanges();
            this.showTable = true;
        },
        error => {
            console.error('Error fetching data', error);
        }
    );
}
}






