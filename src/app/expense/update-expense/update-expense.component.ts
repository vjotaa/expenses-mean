import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../data.service';
import { Expense } from '../expense';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-update-expense',
  templateUrl: './update-expense.component.html',
  styleUrls: ['./update-expense.component.scss']
})
export class UpdateExpenseComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  expense: Expense = {
    _id: '',
    name: '',
    price: 0,
    date: ''
  };
  @Output() value: EventEmitter<String> = new EventEmitter<String>();
  edit = false;
  public convertedText;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _dataService: DataService
  ) {
    this.subscription = this._dataService.getExpense().subscribe(data => {
      this.expense = data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  ngOnInit() {}

  send(event, edit) {
    this.value.emit(edit);
  }

  onUpdate(): void {
    console.log(this.expense);
    console.log('do');
    const id = this.expense._id;
    console.log(id);
    this._dataService.updateExpense(id, this.expense).subscribe(response => {
      if (response) {
        if (response) {
          const expenses = this._dataService.getExpenses().pipe();
          this._dataService.sendExpenses(expenses);
          this.expense._id = '';
          this.expense.name = ' ';
          this.expense.price = 0;
        }
      }
    });
  }
}
