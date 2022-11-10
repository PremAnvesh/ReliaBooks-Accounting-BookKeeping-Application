import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ExpenseComponent } from '../expense/expense.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-finance-cards',
  templateUrl: './finance-cards.component.html',
  styleUrls: ['./finance-cards.component.css']
})
export class FinanceCardsComponent implements OnInit {
  constructor(private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
  }
  onExpense() {
    this.router.navigate(['dashboard/expenses']);
  }

  onJournals() {
    this.router.navigate(['dashboard/journals']);
  }

  onAccounts() {
    this.router.navigate(['dashboard/accounts']);
  }
  
  onReports(){
    this.router.navigate(['dashboard/reports']);
  }
}
