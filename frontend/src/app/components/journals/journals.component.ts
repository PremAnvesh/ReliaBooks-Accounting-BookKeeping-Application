import { Component, OnInit, ViewChild } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Table } from 'primeng/table';
import { Expenses } from 'src/app/constant/expenses';
import { UserService } from 'src/app/services/user.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { JournalsPopUpComponent } from './journals-pop-up/journals-pop-up.component';
@Component({
  selector: 'app-journals',
  templateUrl: './journals.component.html',
  styleUrls: ['./journals.component.css']
})
export class JournalsComponent implements OnInit {


  email = localStorage.getItem('email') || 'email';

  expenses: any

  
  selectedCustomers: any;


  loading: boolean = false;

  @ViewChild('dt')
  table!: Table;

  constructor(
    private primengConfig: PrimeNGConfig,
    private userService: UserService,
    private dialog: MatDialog
  ) { }


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

  onDetails(expense: Expenses) {
    this.dialog.open(JournalsPopUpComponent, { panelClass: 'custom-dialog-container', data: expense, disableClose: true });
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
  }
}
