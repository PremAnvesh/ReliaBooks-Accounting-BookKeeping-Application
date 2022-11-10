import { Component, OnInit, ViewChild } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Table } from 'primeng/table';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import * as XLSX from 'xlsx';
import { Expenses } from 'src/app/constant/expenses';
@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  email = localStorage.getItem('email') || 'email';
  expenses: Expenses[] = [];
  fileName = 'ReliaBooksExcelSheet.xlsx';

  selectedCustomers: any;

  statuses: any = [
    { label: 'Unpaid', value: 'unpaid' },
    { label: 'Paid', value: 'paid' }
  ];

  transactionType: any = [
    { label: "Debit", value: "Debit" },
    { label: "Credit", value: "Credit" }
  ];
  paymentType: any =
    [
      { label: "Credit Card", value: "Credit Card" },
      { label: "Debit Card", value: "Debit Card" },
      { label: "UPI", value: "UPI" },
      { label: "Cash", value: "Cash" }
    ];
  financialType: any = [
    { label: "Balance Sheet", value: "Balance Sheet" },
    { label: "Income Statement", value: "Income Statement" },
    { label: "Invoice", value: "Invoice" }
  ]

  loading: boolean = false;

  @ViewChild('dt')
  table!: Table;

  constructor(
    private primengConfig: PrimeNGConfig,
    private userService: UserService,
    private snackBar: MatSnackBar) { }

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

  exportToExcel(): void {
    /* pass here the table id */
    const snackConfig = new MatSnackBarConfig();
    snackConfig.verticalPosition = 'top';
    snackConfig.horizontalPosition = 'end';
    snackConfig.duration = 3000;
    this.snackBar.open("Downloading...", "Close", snackConfig);

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
