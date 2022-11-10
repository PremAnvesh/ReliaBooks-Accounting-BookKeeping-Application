import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-journals-pop-up',
  templateUrl: './journals-pop-up.component.html',
  styleUrls: ['./journals-pop-up.component.css']
})


export class JournalsPopUpComponent implements OnInit {

  condition : boolean  = true;
  businessAccount : String = '';

  constructor(private dialogRef: MatDialogRef<JournalsPopUpComponent>, @Inject(MAT_DIALOG_DATA) public retrievedData: any) {
    console.log(retrievedData);
    if(retrievedData.transactionType === "Debit")
    this.condition = true;
    else
    this.condition = false;

    this.businessAccount = (retrievedData.supplierName).split(" ")[0];
  };

  ngOnInit(): void {
  }
  onClose() {
    this.dialogRef.close();
  }
}
