import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from 'src/app/constant/User';
import { UserService } from 'src/app/services/user.service';
import { SignUpPageComponent } from '../sign-up-page/sign-up-page.component';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private userService: UserService,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<LoginPageComponent>
  ) { }
  user = new User();
  email: String = '';
  userDetails: User | undefined;
  userInfo: any;
  ngOnInit(): void {
   
  }
  login = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.minLength(7), Validators.maxLength(10), Validators.required])
  });

  onClick() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    this.dialog.open(SignUpPageComponent, dialogConfig);
    this.dialogRef.close();
  }

  onLogin() {
    this.dialogRef.close();
  }

  loginListener() {
    this.userService.loginUserFromRemote(this.user).subscribe(
      data => {
        console.log(this.user);
        console.log("response received");
        this.email = this.user.email;
        console.log("email=", this.email);
        this.userService.getUserDetails(this.email).subscribe(
          response => {
            this.userInfo = response;
            console.log(this.userInfo);
            localStorage.setItem("user", this.userInfo)
            localStorage.setItem("name", this.userInfo.userName)
            localStorage.setItem("email", this.userInfo.email)
            localStorage.setItem("occupation", this.userInfo.occupation)
            localStorage.setItem("id", this.userInfo.id)
            this.router.navigate(['/dashboard']);
          }
        )
      },

      error => {
        console.log("Error Ocurred");
        const snackConfig = new MatSnackBarConfig();
        snackConfig.verticalPosition = 'bottom';
        snackConfig.horizontalPosition = 'center';
        snackConfig.duration = 3000;
        this.snackBar.open(`Please check your credentials and Try Again...`, "Close", snackConfig);
      });
  }


}
