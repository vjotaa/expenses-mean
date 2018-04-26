import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Expense } from '../expense';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss']
})
export class AddExpenseComponent implements OnInit {
  @Output() value: EventEmitter<String> = new EventEmitter<String>();
  expense: Expense = {
    _id: '',
    name: '',
    price: 0,
    date: ''
  };
  convertedText;
  url;
  create = false;

  constructor(private _dataService: DataService, private _router: Router) {}
  ngOnInit() {}

  send(event, create) {
    this.value.emit(create);
  }

  onSubmit() {
    this._dataService
      .createExpense(this.expense as Expense)
      .subscribe(response => {
        if (response) {
          const expenses = this._dataService.getExpenses().pipe();
          this._dataService.sendExpenses(expenses);
        }
      });
    this._router.navigate(['/']);
  }
}
