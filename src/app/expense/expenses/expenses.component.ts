import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DataService } from '../../data.service';
import { Expense } from '../expense';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit, OnDestroy {
  expenses$: Observable<Expense[]>;
  private subscription: Subscription;
  display = false;
  edit = true;
  message;
  @Output() value: EventEmitter<String> = new EventEmitter<String>();
  constructor(private _dataService: DataService, private _router: Router) {
    this.subscription = this._dataService.getExpensesData().subscribe(data => {
      this.expenses$ = data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.getExpenses();
  }

  getExpenses() {
    this.expenses$ = this._dataService.getExpenses().pipe(
      catchError(errorMessage => {
        this.message = errorMessage;
        return [];
      })
    );
  }

  sendInfo(_id, name, price) {
    const data = {
      _id,
      name,
      price
    };
    this._dataService.sendExpense(data);
  }

  sendEdit(event, edit) {
    this.value.emit(edit);
  }
  onDelete(id) {
    this._dataService.deleteExpense(id).subscribe(res => {
      this.display = true;
      console.log(this.display);
      this.getExpenses();
    });
  }
}
