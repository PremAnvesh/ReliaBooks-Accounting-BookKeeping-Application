import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  constructor(private dialog: MatDialog , private router : Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('user') !== null) {
      this.router.navigate(['/dashboard']);
    }
  }

  onLogin() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.panelClass = "custom-dialog-container"
    this.dialog.open(LoginPageComponent, dialogConfig);
  }

  onSignUp() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.panelClass = "custom-dialog-container"
    this.dialog.open(SignUpPageComponent, dialogConfig);
  }

}
