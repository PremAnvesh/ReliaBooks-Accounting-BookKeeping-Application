import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/constant/User';
import { UserService } from 'src/app/services/user.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginPageComponent } from '../login-page/login-page.component';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {
  Roles: Array<String> = ["Student", "Self Employeed", "Salaried"];
  passNotSame: boolean = false;
  user = new User();
  msg: String = '';
  constructor(private userService: UserService,
    private route: Router,
    private dialogRef: MatDialogRef<SignUpPageComponent>,
    private dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  signup = new FormGroup({
    userName: new FormControl(null, [Validators.required, Validators.min(4)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(7), Validators.maxLength(10)]),
    occupation: new FormControl(null, [Validators.required])
  }
  );

  onRegister() {
    console.log(this.user);
    this.userService.registrationUserFromRemote(this.user).subscribe(
      data => {
        console.log("Response Received");
        const snackConfig = new MatSnackBarConfig();
        snackConfig.verticalPosition = 'bottom';
        snackConfig.horizontalPosition = 'center';
        snackConfig.duration = 5000;
        this.snackBar.open(`Registered Successfully..!!! Please Log In`, "Close", snackConfig);
        this.dialogRef.close();
        this.dialog.open(LoginPageComponent);
      },
      error => {
        console.log("Error Ocurred");
        this.msg = `User with ${this.user.email} email already exist !!!`;
        const snackConfig = new MatSnackBarConfig();
        snackConfig.verticalPosition = 'bottom';
        snackConfig.horizontalPosition = 'center';
        snackConfig.duration = 5000;
        this.snackBar.open(`User with ${this.user.email} email already exist !!! Please Log In`, "Close", snackConfig);
        this.dialogRef.close();
        this.dialog.open(LoginPageComponent);
        console.log(this.msg);
      }
    )
  }
}
