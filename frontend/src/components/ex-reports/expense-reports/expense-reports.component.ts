import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-expense-reports',
  templateUrl: './expense-reports.component.html',
  styleUrls: ['./expense-reports.component.css']
})
export class ExpenseReportsComponent implements OnInit {
  basicData: any;
  chartOptions : any;

  electricityCount : number = 0;
  rentCount : number = 0;
  salaryCount : number = 0;
  feesCount : number = 0;
  stocksCryptoCount : number = 0;
  charityCount : number = 0;
  purchasesCount : number = 0;
  otherCount : number = 0;

  electricityAmount : number = 0;
  rentAmount : number = 0;
  salaryAmount : number = 0;
  feesAmount : number = 0;
  stocksCryptoAmount : number = 0;
  charityAmount : number = 0;
  purchasesAmount : number = 0;
  otherAmount : number = 0;

  totalAmount : number = 0;
  constructor(
    private dialogRef: MatDialogRef<ExpenseReportsComponent>,
    @Inject(MAT_DIALOG_DATA) public retrievedData: any
  ) {
    for(let i of retrievedData){
      console.log(i);
      if(i.expenseType === "Electricity"){
        this.electricityAmount += i.amount;
        this.electricityCount += 1;
      }
      else if(i.expenseType === "Rent"){
        this.rentAmount += i.amount;
        this.rentCount += 1;
      }
      else if(i.expenseType === "Salaries"){
        this.salaryAmount += i.amount;
        this.salaryCount += 1;
      }
      else if(i.expenseType === "Fees"){
        this.feesAmount += i.amount;
        this.feesCount += 1;
      }
      else if(i.expenseType === "Charity"){
        this.charityAmount += i.amount;
        this.charityCount += 1;
      }
      else if(i.expenseType === "Stocks and Crypto"){
        this.stocksCryptoAmount += i.amount;
        this.stocksCryptoCount += 1;
      }
      else if(i.expenseType === "Purchases"){
        this.purchasesAmount += i.amount;
        this.purchasesCount += 1;
      }
      else{
        this.otherAmount += i.amount;
        this.otherCount += 1;
      }
    }
    this.totalAmount = this.electricityAmount + this.rentAmount + this.salaryAmount + this.feesAmount+ this.salaryAmount + this.charityAmount + this.purchasesAmount + this.otherAmount;
  }

  ngOnInit(): void {
    this.basicData = {
      labels: ["Electricity", "Rent", "Salaries", "Fees", "Stocks And Crypto" , "Charity", "Purchases" ,"Others"],
      datasets: [
        // {data: [3000 , 12000 , 93903 , 23500, 10000 , 7000],
          {data: [this.electricityAmount , this.rentAmount , this.salaryAmount , this.feesAmount, this.stocksCryptoAmount , this.charityAmount , this.purchasesAmount , this.otherAmount],
          backgroundColor: [
            "#42A5F5",
            "#66BB6A",
            "#FFA726",
            "#E0144C",
            "#9C2C77",
            "#38E54D",
            "#6F38C5",
            "#FF8FB1"
          ],
          hoverBackgroundColor: [
            "#64B5F6",
            "#81C784",
            "#FFB74D",
            "#E0144C",
            "#9C2C77",
            "#38E54D",
            "#6F38C5",
            "#FF8FB1"
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
