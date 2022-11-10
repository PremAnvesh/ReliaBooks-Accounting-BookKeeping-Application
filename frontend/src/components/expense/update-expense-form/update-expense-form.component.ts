import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-update-expense-form',
  templateUrl: './update-expense-form.component.html',
  styleUrls: ['./update-expense-form.component.css'],
  providers: [DatePipe]
})
export class UpdateExpenseFormComponent implements OnInit {
  expenseDetails: any;
  email = localStorage.getItem('email') || 'email';
  id = localStorage.getItem('id') || 'id';
  expenses: any;
  submitted = false;
  date:any;

  expenseType: Array<String> = ["Electricity", "Rent", "Salaries","Stocks and Crypto", "Fees", "Charity", "Purchases" , "Others"];
  assetType: Array<String> = ["Expense", "Long Term Asset", "Current Asset", "Liability"];
  transaction: Array<String> = ["Debit", "Credit"];
  status: Array<String> = ["Paid", "Unpaid"];
  paymentType: Array<String> = ["Credit Card", "Debit Card", "UPI", "Cash" , "NEFT"];
  finStatement: Array<String> = ["Balance Sheet", "Income Statement", "Invoice"];

  constructor(
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<UpdateExpenseFormComponent>,
    private userService: UserService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public expenseData: any,
    private datePipe:DatePipe) {
    console.log(expenseData);
    this.expenseDetails = this.router.getCurrentNavigation()?.extras.state;
    console.log(this.expenseDetails);
  }

  ngOnInit(): void {
  }

  expense: FormGroup = new FormGroup({
    expenseType: new FormControl(this.expenseData.expenseType, Validators.required),
    amount: new FormControl(this.expenseData.amount, Validators.required),
    date: new FormControl(this.expenseData.date, Validators.required),
    assetType: new FormControl(this.expenseData.assetType, Validators.required),
    transactionType: new FormControl(this.expenseData.transactionType, Validators.required),
    financialType: new FormControl(this.expenseData.financialType, Validators.required),
    status: new FormControl(this.expenseData.status, Validators.required),
    paymentType: new FormControl(this.expenseData.paymentType, Validators.required),
    notes: new FormControl(this.expenseData.notes, Validators.maxLength(40)),
    sgst: new FormControl(this.expenseData.sgst),
    cgst: new FormControl(this.expenseData.cgst),
    igst: new FormControl(this.expenseData.igst),
    supplierName: new FormControl(this.expenseData.supplierName, Validators.required)
  });
  onSubmit() {
    if (this.expense.valid) {
      console.log(this.expense.value.paymentType);
      this.expenses = this.expense.value;
      this.date = this.expenses.date;
      this.date = this.datePipe.transform(this.date, 'yyyy-MM-dd');
      this.expenses.date = this.date;
      this.userService.updateExpenseDetails(this.email, this.expenseData.id, this.expenses).subscribe();
      const snackConfig = new MatSnackBarConfig();
      snackConfig.verticalPosition = 'bottom';
      snackConfig.horizontalPosition = 'center';
      snackConfig.duration = 1500;
      this.snackBar.open("Expense Updated Successfully", "Close", snackConfig);
      this.router.navigate(['dashboard/expenses/expenseList']);
      setTimeout(() => {
        window.location.reload();
      }, 1500);
      this.dialogRef.close();
    }
  }

  onClear() {
    const snackConfig = new MatSnackBarConfig();
    snackConfig.verticalPosition = 'top';
    snackConfig.horizontalPosition = 'end';
    snackConfig.duration = 3000;
    this.snackBar.open("Form Cleared", "Close", snackConfig);
    this.expense.reset();
  }
}
