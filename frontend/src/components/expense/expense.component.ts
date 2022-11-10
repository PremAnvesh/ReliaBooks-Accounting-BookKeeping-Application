import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {


  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  
  onAdd() {
    this.router.navigate(['dashboard/expenses']);
  }

  onClick() {
    this.router.navigate(['dashboard/expenses/expenseList']);
  }

}
