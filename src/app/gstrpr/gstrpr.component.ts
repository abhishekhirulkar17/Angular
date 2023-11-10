import { Component } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { GstrprService } from './gstrpr.service';  

@Component({
  selector: 'app-gstrpr',
  templateUrl: './gstrpr.component.html',
  styleUrls: ['./gstrpr.component.scss']
})
export class GstrprComponent {
  sidebarExpanded = true;
  showTable: boolean = false;

  // sidebarExpanded = true;
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

constructor(private gstrprService:  GstrprService, private cd: ChangeDetectorRef,private router: Router) { }

onBackClickPR(): void {
  this.router.navigate(['/dashboard']); // Replace 'previousRoute' with the path you want to navigate to when the "Back" button is clicked.
}


onGetPRClick() {
    this.gstrprService.PRdownloadDataFromGSTN().subscribe(
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







  

