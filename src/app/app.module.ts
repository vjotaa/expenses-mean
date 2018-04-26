import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AddExpenseComponent } from './expense/add-expense/add-expense.component';
import { ExpensesComponent } from './expense/expenses/expenses.component';
import { UpdateExpenseComponent } from './expense/update-expense/update-expense.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TimeAgoPipe } from 'time-ago-pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddExpenseComponent,
    ExpensesComponent,
    UpdateExpenseComponent,
    TimeAgoPipe
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
