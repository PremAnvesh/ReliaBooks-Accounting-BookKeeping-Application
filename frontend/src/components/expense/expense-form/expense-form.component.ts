import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css'],
  providers: [DatePipe]
})


export class ExpenseFormComponent implements OnInit {
  email = localStorage.getItem('email') || 'email';
  id = localStorage.getItem('id') || 'id';
  expenses: any;
  submitted = false;
  date: any;
  expenseType: Array<String> = ["Electricity", "Rent", "Salaries","Stocks and Crypto", "Fees", "Charity", "Purchases" , "Others"];
  assetType: Array<String> = ["Expense", "Long Term Asset", "Current Asset", "Liability"];
  transaction: Array<String> = ["Debit", "Credit"];
  status: Array<String> = ["Paid", "Unpaid"];
  paymentType: Array<String> = ["Credit Card", "Debit Card", "UPI", "Cash" , "NEFT"];
  finStatement: Array<String> = ["Balance Sheet", "Income Statement", "Invoice"];

  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar,
    private router: Router,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
  }
  expense: FormGroup = new FormGroup({
    expenseType: new FormControl(null, Validators.required),
    amount: new FormControl(0.00, Validators.required),
    date: new FormControl(null, Validators.required),
    assetType: new FormControl(null, Validators.required),
    transactionType: new FormControl(null, Validators.required),
    financialType: new FormControl(null, Validators.required),
    status: new FormControl(null, Validators.required),
    paymentType: new FormControl(null, Validators.required),
    notes: new FormControl(null, Validators.maxLength(40)),
    sgst: new FormControl(0.00),
    cgst: new FormControl(0.00),
    igst: new FormControl(0.00),
    supplierName: new FormControl(null, Validators.required)
  });

  onSubmit() {
    this.submitted = true;
    if (!this.expense.valid) {
      const snackConfig = new MatSnackBarConfig();
      snackConfig.verticalPosition = 'bottom';
      snackConfig.horizontalPosition = 'center';
      snackConfig.duration = 2000;
      setTimeout(async () => {
        await window.location.reload();
      }, 100);
      this.snackBar.open("Required Fields are left Empty !!!", "Close", snackConfig);
    }
    if (this.expense.valid) {
      this.expenses = this.expense.value;
      this.date = this.expenses.date;
      this.date = this.datePipe.transform(this.date, 'yyyy-MM-dd');
      this.expenses.date = this.date;
      this.expenses.id = makeID();

      this.userService.postExpenseDetails(this.id, this.expenses).subscribe();
      const snackConfig = new MatSnackBarConfig();
      snackConfig.verticalPosition = 'bottom';
      snackConfig.horizontalPosition = 'center';
      snackConfig.duration = 3000;
      this.snackBar.open("Expense Added Successfully", "Close", snackConfig);
      this.router.navigate(['dashboard/expenses/expenseList']);
    }
  }

  onClear() {
    const snackConfig = new MatSnackBarConfig();
    snackConfig.verticalPosition = 'bottom';
    snackConfig.horizontalPosition = 'center';
    snackConfig.duration = 2000;
    this.snackBar.open("Form Cleared", "Close", snackConfig);
    this.expense.reset();
  }

}

function makeID() {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < 10; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}