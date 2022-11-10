import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-payment-reports',
  templateUrl: './payment-reports.component.html',
  styleUrls: ['./payment-reports.component.css']
})
export class PaymentReportsComponent implements OnInit {


  data: any;
  chartOptions: any;
  
  creditAmount : number = 0;
  debitAmount : number = 0;
  cashAmount : number = 0;
  upiAmount : number = 0;
  totalAmount : number = 0;
  neftAmount : number = 0;
  constructor(
    private dialogRef: MatDialogRef<PaymentReportsComponent>,
    @Inject(MAT_DIALOG_DATA) public retrievedData: any) {
      for(let i of retrievedData){
        if (i.paymentType === "Credit Card")
          this.creditAmount += i.amount;
        else if(i.paymentType === "Debit Card")
          this.debitAmount += i.amount;
        else if(i.paymentType === "UPI")
          this.upiAmount += i.amount;
        else if(i.paymentType === "NEFT")
          this.neftAmount += i.amount;
        else 
          this.cashAmount +=i.amount;
      }
      this.totalAmount = this.creditAmount + this.debitAmount + this.neftAmount + this.upiAmount + this.cashAmount;
     }


  ngOnInit(): void {
    this.data = {
      labels: ["Credit Card", "Debit Card", "UPI", "Cash" , "NEFT"],
      datasets: [
        {
          data: [this.creditAmount, this.debitAmount, this.upiAmount, this.cashAmount , this.neftAmount],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#C8FFD4",
            "#9C2C77"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#C8FFD4",
            "#9C2C77"
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

