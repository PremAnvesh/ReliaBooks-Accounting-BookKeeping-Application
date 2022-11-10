import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { bindCallback } from 'rxjs';
@Component({
  selector: 'app-asset-reports',
  templateUrl: './asset-reports.component.html',
  styleUrls: ['./asset-reports.component.css']
})
export class AssetReportsComponent implements OnInit {

  
  data: any;
  chartOptions : any;
  longAmount : number = 0;
  currentAmount : number = 0;
  liabilAmount : number = 0;
  expenseAmount : number = 0;
  totalAmount : number = 0;
  constructor(
    private dialogRef: MatDialogRef<AssetReportsComponent>,
    @Inject(MAT_DIALOG_DATA) public retrievedData: any) {
      for(let i of retrievedData){
        if (i.assetType === "Long Term Asset")
          this.longAmount += i.amount;
        else if(i.assetType === "Current Asset")
          this.currentAmount += i.amount;
        else if(i.assetType === "Liability")
          this.liabilAmount += i.amount;
        else 
          this.expenseAmount +=i.amount;
      }
      this.totalAmount = this.longAmount + this.currentAmount + this.liabilAmount + this.expenseAmount;
     }


  ngOnInit(): void {
    this.data = {
      labels: ["Long Term Asset", "Current Asset", "Liability", "Expense"],
      datasets: [
        {
          data: [this.longAmount, this.currentAmount, this.liabilAmount, this.expenseAmount],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#C8FFD4"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#C8FFD4"
          ]
        }
      ]
    };

    this.chartOptions = {
      plugins: {
          legend: {
              labels: {
                font :{
                  size : 16
                }
              }
          }
      }};

  }

}
