import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Expenses } from 'src/app/constant/expenses';
import { UserService } from 'src/app/services/user.service';
import { TransactionsReportsComponent } from './transactions-reports/transactions-reports.component';
import { ExpenseReportsComponent } from './expense-reports/expense-reports.component';
import { PaymentReportsComponent } from './payment-reports/payment-reports.component';
import { AssetReportsComponent } from './asset-reports/asset-reports.component';
@Component({
  selector: 'app-ex-reports',
  templateUrl: './ex-reports.component.html',
  styleUrls: ['./ex-reports.component.css']
})
export class ExReportsComponent implements OnInit {


  email = localStorage.getItem('email') || 'email';

  constructor(
    private router: Router,
    private userService: UserService,
    private dialog: MatDialog) { }
  expenses: Expenses[] = [];
  ngOnInit(): void {
    this.userService.getExpenseDetails(this.email).subscribe(response => {
      this.expenses = response;
    })
  }
  onInvoices() {
    this.router.navigate(["dashboard/reports/invoices"]);
  }

  onTransactionReports() {
    this.dialog.open(TransactionsReportsComponent, { panelClass: 'custom-dialog-container', data: this.expenses });
  }

  onExpenseReports() {
    this.dialog.open(ExpenseReportsComponent, { panelClass: 'custom-dialog-container', data: this.expenses });
  }

  onPaymentReports() {
    this.dialog.open(PaymentReportsComponent, { panelClass: 'custom-dialog-container', data: this.expenses });
  }

  onAssetReports(){
    this.dialog.open(AssetReportsComponent, { panelClass: 'custom-dialog-container', data: this.expenses });
  }

}
