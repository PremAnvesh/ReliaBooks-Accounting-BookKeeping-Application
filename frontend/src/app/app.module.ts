import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from './angular-material.module';

import { LoginPageComponent } from './components/start-page/login-page/login-page.component';
import { SignUpPageComponent } from './components/start-page/sign-up-page/sign-up-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { FinanceCardsComponent } from './components/finance-cards/finance-cards.component';
import { AssetReportsComponent } from './components/ex-reports/asset-reports/asset-reports.component';
import { ExpenseComponent } from './components/expense/expense.component';
import { JournalsComponent } from './components/journals/journals.component';
import { ExpenseFormComponent } from './components/expense/expense-form/expense-form.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { ExpenseListComponent } from './components/expense/expense-list/expense-list.component';
import { UpdateExpenseFormComponent } from './components/expense/update-expense-form/update-expense-form.component';
import { JournalsPopUpComponent } from './components/journals/journals-pop-up/journals-pop-up.component';
import { ExReportsComponent } from './components/ex-reports/ex-reports.component';
import { ExpenseReportsComponent } from './components/ex-reports/expense-reports/expense-reports.component';
import { InvoicesComponent } from './components/ex-reports/invoices/invoices.component';
import { TransactionsReportsComponent } from './components/ex-reports/transactions-reports/transactions-reports.component';
import { PaymentReportsComponent } from './components/ex-reports/payment-reports/payment-reports.component';
import { InvoicePageComponent } from './components/ex-reports/invoices/invoice-page/invoice-page.component';

import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { DialogModule } from 'primeng/dialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ToastModule } from 'primeng/toast';
import { ProgressBarModule } from 'primeng/progressbar';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignUpPageComponent,
    UserDashboardComponent,
    FinanceCardsComponent,
    ExpenseComponent,
    JournalsComponent,
    ExpenseFormComponent,
    ExpenseListComponent,
    AccountsComponent,
    StartPageComponent,
    UpdateExpenseFormComponent,
    JournalsPopUpComponent,
    ExReportsComponent,
    ExpenseReportsComponent,
    InvoicesComponent,
    TransactionsReportsComponent,
    PaymentReportsComponent,
    InvoicePageComponent,
    AssetReportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    DropdownModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    ToastModule,
    ProgressBarModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    PanelModule,
    CardModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
