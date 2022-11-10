import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-transactions-reports',
  templateUrl: './transactions-reports.component.html',
  styleUrls: ['./transactions-reports.component.css']
})
export class TransactionsReportsComponent implements OnInit {

  basicData: any;
  chartOptions: any;
  debitCt: number = 0;
  creditCt: number = 0;
  debitAmount: number = 0;
  creditAmount: number = 0;
  condition: boolean = true;
  totalAmount: number = 0;
  amountLeft: number = 0;

  constructor(
    private dialogRef: MatDialogRef<TransactionsReportsComponent>,
    @Inject(MAT_DIALOG_DATA) public retrievedData: any) {
    for (let i of retrievedData) {
      if (i.transactionType === "Debit") {
        this.debitCt += 1;
        this.debitAmount += i.amount;
      }
      else {
        this.creditCt += 1;
        this.creditAmount += i.amount;
      }
    }
    this.totalAmount = this.creditAmount + this.debitAmount;
    this.amountLeft = this.creditAmount - this.debitAmount;

    if (this.amountLeft < 0) {
      this.condition = false;
    }
    else {
      this.condition = true;
    }

  }

  ngOnInit(): void {
    this.basicData = {
      labels: ["Credit", "Debit"],
      datasets: [
        {
          label: 'Credit Transactions',
          backgroundColor: '#42A5F5',
          data: [this.creditCt]
        },
        {
          label: 'Debit Transactions',
          backgroundColor: '#FFA726',
          data: [0, this.debitCt]
        }
      ]
    };

    this.chartOptions = {
      plugins: {
        legend: {
          labels: {
            font: {
              size: 16
            }
          }
        }
      }
    };

  }

}
