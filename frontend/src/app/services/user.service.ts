import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { ConstantUrl } from '../constant/ConstantUrl';
import { Expenses } from '../constant/expenses';
import { User } from '../constant/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private httpclient: HttpClient) { }

  //LOG IN FOR NEW USER
  loginUserFromRemote(user: User): Observable<any> {
    const header = new HttpHeaders();
    header.set('Content-Type', 'application/json');
    return this.httpclient.post<any>(`${ConstantUrl.signinEndPoint}`, user, { 'headers': header }).pipe(retry(1), catchError(this.handleError));
  }

  //Registration New USER
  registrationUserFromRemote(user: User): Observable<any> {
    const header = new HttpHeaders();
    header.set('Content-Type', 'application/json');
    return this.httpclient.post<any>
      (`${ConstantUrl.signupEndPoint}`, user, { 'headers': header })
      .pipe(retry(1), catchError(this.handleError));
  }

  //GET ALL USER DETAILS
  getUserDetails(email: String): Observable<any> {
    return this.httpclient.get<any>
      (`${ConstantUrl.getAllDetailsUsingEmail}/${email}`)
      .pipe(retry(1), catchError(this.handleError));
  }

  //GET EXPENSE DETAILS OF PARTICULAR USER
  getExpenseDetails(email: String): Observable<any> {
    return this.httpclient.get<any>
      (`${ConstantUrl.getExpenseDetails}/${email}`)
      .pipe(retry(1), catchError(this.handleError));
  }

  //ADD NEW EXPENSE DETAILS OF USER
  postExpenseDetails(id: String, expense: Expenses): Observable<any> {
    const header = new HttpHeaders();
    header.set('Content-Type', 'application/json');
    return this.httpclient.post<any>
      (`${ConstantUrl.newExpenseDetails}/${id}`, expense, { 'headers': header })
      .pipe(retry(1), catchError(this.handleError));
  }

  updateExpenseDetails(email: String, expid: String, expense: Expenses): Observable<any> {
    const header = new HttpHeaders();
    header.set('Content-Type', 'application/json');
    return this.httpclient.put<any>
      (`${ConstantUrl.newExpenseDetails}/${email}/${expid}`, expense, { 'headers': header })
      .pipe(retry(1), catchError(this.handleError));
  }

  deleteExpenseDetails(email : String , expid : String):Observable<any>{
    return this.httpclient.delete<any>
    (`${ConstantUrl.newExpenseDetails}/${email}/${expid}`)
    .pipe(retry(1), catchError(this.handleError));
  }


  handleError(err: any) {
    return throwError(() => {
      console.log(err);
    });
  }
}
