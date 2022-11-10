import { Component, OnInit, ViewChild } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Table } from 'primeng/table';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Expenses } from 'src/app/constant/expenses';
import { InvoicePageComponent } from './invoice-page/invoice-page.component';
@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {
  email = localStorage.getItem('email') || 'email';
  expenses: Expenses[] =[];

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
    private dialog: MatDialog) {
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


  onInvoice(expense : Expenses){
    this.dialog.open(InvoicePageComponent , {panelClass: 'custom-dialog-container',data : expense , autoFocus : true} );
  }

}
