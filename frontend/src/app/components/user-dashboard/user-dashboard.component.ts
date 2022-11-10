import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TransactionsReportsComponent } from '../ex-reports/transactions-reports/transactions-reports.component';
import { ExpenseReportsComponent } from '../ex-reports/expense-reports/expense-reports.component';
import { PaymentReportsComponent } from '../ex-reports/payment-reports/payment-reports.component';
import { AssetReportsComponent } from '../ex-reports/asset-reports/asset-reports.component';
import { Expenses } from 'src/app/constant/expenses';
import { UserService } from 'src/app/services/user.service';
import { ProfileComponent } from '../profile/profile.component';
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {
  expenses: Expenses[] = [];
  userName = localStorage.getItem("name");
  email = localStorage.getItem("email") || "{}";
  userOccupation = localStorage.getItem("occupation");

  @ViewChild(MatSidenav) sideNav!: MatSidenav;
  constructor(
    private observer: BreakpointObserver,
    private router: Router, private cd: ChangeDetectorRef,
    private dialog: MatDialog,
    private userService : UserService) {
    this.userService.getExpenseDetails(this.email).subscribe(response => {
      this.expenses = response;
    })
  }
  ngAfterViewInit() {
    this.observer.observe(['(max-width : 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sideNav.mode = 'over';
        this.sideNav.close();
        this.cd.detectChanges();
      }
      else {
        this.sideNav.mode = 'side';
        this.sideNav.open();
        this.cd.detectChanges();
      }
    });
  }
  toHome() {
    this.router.navigate(['dashboard']);
  }

  onAbout() {
    this.router.navigate(['dashboard/aboutUs']);
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

  onAssetReports() {
    this.dialog.open(AssetReportsComponent, { panelClass: 'custom-dialog-container', data: this.expenses });
  }

  onProfile(){
    this.router.navigate(['dashboard/profile'])
  }

  onLogout() {
    localStorage.clear();
    setTimeout(() => {
      this.router.navigate(['']);
    }, 600);
  }
}
