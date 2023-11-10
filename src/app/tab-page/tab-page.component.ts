import { Component } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


interface DataStructure {
  gstrLogId: number;
  customerGSTIN: string;
  supplierGSTIN: string;
  tradeName: string;
  invoiceNumber: string;
  invoiceType:string;
  invoiceDate:string;
  invoiceValue:string;
  placeOfSupply:string;
  supplyAttractReverseCharge:string;
  ratePercentage:string;
  taxableValue:string;
  igst:string;
  cgst:string;
  sgst:string;
  ugst:string;
  cess:string;
  gstrPeriod:string;
  gstrFilingDate:string;
  itcAvailability:string;
  reason:string;
  applicablePercOfTaxRate:string;
  source:string;
  irn:string;
  irnDate:string;
  createdOn:string;
  createdBy:string;
  // ... add the rest of the fields ...
}

@Component({
  selector: 'app-tab-page',
  templateUrl: './tab-page.component.html',
  styleUrls: ['./tab-page.component.scss']
})

export class TabPageComponent {

  showTable: boolean = false;

  sidebarExpanded = true;

  columnsTab1: string[] = ['customerGSTIN', 'supplierGSTIN', 'tradeName', 'invoiceNumber', 
  'invoiceType', 'invoiceDate', 'invoiceValue', 'placeOfSupply', 
  'supplyAttractReverseCharge', 'ratePercentage', 'taxableValue', 'igst', 
  'cgst', 'sgst', 'cess', 'gstrPeriod', 'gstrFilingDate', 
  'itcAvailability', 'reason', 'applicablePercOfTaxRate', 'source', 'irn', 
  'irnDate', 'supplierCode', 'uidResult'];

  columnsTab2: string[] = ['customerGSTIN', 'supplierGSTIN', 'tradeName', 'invoiceNumber', 
  'invoiceType', 'invoiceDate', 'invoiceValue', 'placeOfSupply', 
  'supplyAttractReverseCharge', 'ratePercentage', 'taxableValue', 'igst', 
  'cgst', 'sgst','cess', 'gstrPeriod', 'gstrFilingDate', 
  'itcAvailability', 'reason', 'applicablePercOfTaxRate', 'source', 'irn', 
  'irnDate', 'uidResult'];

  columnsTab3: string[] = ['vendorCode','writerGSTINPR','writerGSTIN2B','writerGSTINSTATUS','supplierGSTINPR','supplierGSTIN2B','supplierGSTINSTATUS','invoiceNumberPR',
  'invoiceNumber2B','invoiceNumberSTATUS','invoiceDatePR','invoiceDate2B','invoiceDateSTATUS',
  'invoiceValuePR','invoiceValue2B','invoiceValueSTATUS','invoicevalue_PR_and_GSTR2BDifference',
  'placeofSupplyPR','placeofSupply2B','placeofSupplySTATUS','ratePR','rate2B','rateSTATUS',
  'taxablevaluePR','taxablevalue2B','taxablevalueSTATUS','taxablevalue_PR_and_GSTR2BDifference',
  'igstpr','igsT2B','igststatus','igsT_PR_and_GSTR2BDifference','cgstpr','cgsT2B','cgststatus',
  'cgsT_PR_and_GSTR2BDifference','sgstpr','sgsT2B','sgststatus','sgsT_PR_and_GSTR2BDifference',
  'mismatch_Details','mismatch_Count','mismatchingAtGSTINandPAN'];



  displayedColumns: string[] = [];
//   displayedColumns: string[] = [
    // 'gstrLogId', 'customerGSTIN', 'supplierGSTIN', 'tradeName', 'invoiceNumber', 
    // 'invoiceType', 'invoiceDate', 'invoiceValue', 'placeOfSupply', 
    // 'supplyAttractReverseCharge', 'ratePercentage', 'taxableValue', 'igst', 
    // 'cgst', 'sgst', 'ugst', 'cess', 'gstrPeriod', 'gstrFilingDate', 
    // 'itcAvailability', 'reason', 'applicablePercOfTaxRate', 'source', 'irn', 
    // 'irnDate', 'createdOn', 'createdBy'
// ];

// You would also populate your dataSource here with your API call or service.
dataSource: DataStructure[] = []; // This should hold the actual data retrieved for the table.

constructor( private http: HttpClient,private changeDetector: ChangeDetectorRef,private router: Router) { }
selectedTabIndex: number = 0;
// onDownloadClick() {
//   this.gstr2bService.downloadDataFromGSTN().subscribe(
//       data => {
//           console.log(data);  // Debug line to check your data.
//           this.dataSource = data;
//           this.cd.detectChanges();
//           this.showTable = true;
//       },
//       error => {
//           console.error('Error fetching data', error);
//       }
//   );
// }


// ngOnInit() {
//   // Load the data for the first tab when the component is initialized.
//   this.displayedColumns = this.columnsTab1;
//   this.callApiForTab1(); // Load the data for the first tab
// }


onTabChange(event: any) {
  const tabIndex = event.index;
  switch (tabIndex) {
    case 0:
      this.displayedColumns = this.columnsTab1;
      this.callApiForTab1();
      break;
    case 1:
      this.displayedColumns = this.columnsTab2;
      this.callApiForTab2();
      break;
    case 2:
      this.displayedColumns = this.columnsTab3;
      this.callApiForTab3();
      break;
    default:
      console.error('Unknown tab index', tabIndex);
  }
}



callApiForTab1() {
  this.http.get<DataStructure[]>('https://localhost:7230/api/GSTRecon/getNot2B').subscribe(data => {
    if (Array.isArray(data)) {
      this.dataSource = []; // Clear the array
      this.dataSource = data;
    } else {
      console.error('API did not return an array');
    }
  }, error => {
    console.error('Error fetching data for Tab 1:', error);
  });
}

callApiForTab2() {
  this.http.get<DataStructure[]>('https://localhost:7230/api/GSTRecon/getNotPR').subscribe(data => {
    if (Array.isArray(data)) {
      this.dataSource = []; // Clear the array
      this.dataSource = data;
    } else {
      console.error('API did not return an array');
    }
  }, error => {
    console.error('Error fetching data for Tab 2:', error);
  });
}

callApiForTab3() {
  this.http.get<DataStructure[]>('https://localhost:7230/api/GSTRecon/getFinalOutput').subscribe(data => {
    if (Array.isArray(data)) {
      this.dataSource = []; // Clear the array
      this.dataSource = data;
    } else {
      console.error('API did not return an array');
    }
  }, error => {
    console.error('Error fetching data for Tab 3:', error);
  });
}

goBack() {
  
  this.router.navigate(['/dashboard']);
}
showGraphs() {
  this.router.navigate(['/dash-embed']);
}



}
