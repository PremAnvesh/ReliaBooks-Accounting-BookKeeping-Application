import { Component, OnInit, ViewChild } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Table } from 'primeng/table';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UpdateExpenseFormComponent } from '../update-expense-form/update-expense-form.component';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import * as XLSX from 'xlsx';
import { Expenses } from 'src/app/constant/expenses';
@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {

  email = localStorage.getItem('email') || 'email';
  expenses: Expenses[] = [];
  fileName = 'ReliaBooksExcelSheet.xlsx';

  selectedCustomers: any;


  statuses: any = [
    { label: 'Unpaid', value: 'unpaid' },
    { label: 'Paid', value: 'paid' }
  ];

  loading: boolean = false;

  @ViewChild('dt')
  table!: Table;

  constructor(private primengConfig: PrimeNGConfig,
    private userService: UserService,
    private router: Router,
    private dialog: MatDialog,
    private snackBar: MatSnackBar) {
    console.log(this.email);

  }

  ngOnInit() {
    this.primengConfig.ripple = true;

    this.userService.getExpenseDetails(this.email).subscribe(response => {
      this.expenses = response;
    })
  }

  onActivityChange(event: any) {
    const value = event.target.value;
    if (value && value.trim().length) {
      const activity = parseInt(value);

      if (!isNaN(activity)) {
        this.table.filter(activity, 'activity', 'gte');
      }
    }
  }



  onUpdate(expense: any) {
    console.log(expense);
    this.dialog.open(UpdateExpenseFormComponent, {
      data: expense,
      panelClass: "custom-dialog-container",
      width: "60%",
      autoFocus: true
    });
  }

  onDelete(expenseID: String) {
    this.userService.deleteExpenseDetails(this.email, expenseID).subscribe();

    console.log("Deleted Expense with ID " + expenseID);
    const snackConfig = new MatSnackBarConfig();
    snackConfig.verticalPosition = 'bottom';
    snackConfig.horizontalPosition = 'center';
    snackConfig.duration = 1500;
    this.snackBar.open("Expense Deleted !!", "Close", snackConfig);
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  }

  exportToExcel(): void {
   
    const snackConfig = new MatSnackBarConfig();
    snackConfig.verticalPosition = 'bottom';
    snackConfig.horizontalPosition = 'center';
    snackConfig.duration = 2000;
    this.snackBar.open("Downloading...", "Close", snackConfig);
     /* pass here the table id */
    let element = document.getElementById('excel-table');
    // let element = this.expenses;
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }

}
