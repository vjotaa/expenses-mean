import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Expense } from './expense/expense';
// tslint:disable-next-line:import-blacklist
import { Observable, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class DataService {
  public url = 'http://localhost:5000';
  private expenses = new Subject<any>();
  private expenseData = new Subject<any>();

  sendExpenses(state: any) {
    this.expenses.next(state);
  }
  sendExpense(state: any) {
    this.expenseData.next(state);
  }

  getExpense(): Observable<any> {
    return this.expenseData.asObservable();
  }
  getExpensesData(): Observable<any> {
    return this.expenses.asObservable();
  }

  constructor(private http: HttpClient) {}

  getExpenses(): Observable<Expense[]> {
    const url = `/conta/gastos`;
    return this.http
      .get<Expense[]>(url)
      .pipe(
        tap(expense => console.log(`fetched expense`)),
        catchError(this.handleError('getExpense', []))
      );
  }

  createExpense(expense: Expense): Observable<Expense> {
    const url = `/conta/gasto`;
    return this.http
      .post<Expense>(url, expense, httpOptions)
      .pipe(
        tap((exp: Expense) => console.log(`added expense`)),
        catchError(this.handleError<Expense>('addExpense'))
      );
  }

  updateExpense(id: string, expense: Expense): Observable<any> {
    const url = `/conta/gasto/${id}`;
    return this.http
      .put(url, expense, httpOptions)
      .pipe(
        tap(_ => console.log(`updated expense id=${id}`)),
        catchError(this.handleError<any>('updateExpense'))
      );
  }

  deleteExpense(id: string): Observable<Expense> {
    const url = `/conta/gasto/${id}`;
    return this.http
      .delete<Expense>(url, httpOptions)
      .pipe(
        tap(_ => console.log(`deleted expense id=${id}`)),
        catchError(this.handleError<Expense>('deleteExpense'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return;
    };
  }
}
