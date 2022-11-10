import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { ExpenseComponent } from './components/expense/expense.component';
import { JournalsComponent } from './components/journals/journals.component';
import { FinanceCardsComponent } from './components/finance-cards/finance-cards.component';
import { ExpenseFormComponent } from './components/expense/expense-form/expense-form.component';
import { ExpenseListComponent } from './components/expense/expense-list/expense-list.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { ExReportsComponent } from './components/ex-reports/ex-reports.component';
import { InvoicesComponent } from './components/ex-reports/invoices/invoices.component';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  { path: "", component: StartPageComponent },
  {
    path: "dashboard", canActivate: [AuthGuard], component: UserDashboardComponent,
    children: [
      { path: "", component: FinanceCardsComponent },
      { path: "aboutUs", component: AboutUsComponent  },
      {
        path: "expenses", component: ExpenseComponent,
        children: [
          { path: "", component: ExpenseFormComponent },
          { path: "expenseList", component: ExpenseListComponent }
        ]
      },
      { path: "journals", component: JournalsComponent },
      { path: "accounts", component: AccountsComponent  },
      { path: "reports", component: ExReportsComponent },
      { path: "reports/invoices", component: InvoicesComponent },
      { path : "**" , component : FinanceCardsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
