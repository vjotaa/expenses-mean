import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddExpenseComponent } from './expense/add-expense/add-expense.component';
import { ExpensesComponent } from './expense/expenses/expenses.component';
import { UpdateExpenseComponent } from './expense/update-expense/update-expense.component';

const routes: Routes = [
  {
    path: '',
    component: ExpensesComponent
  },
  {
    path: 'add-expense',
    component: AddExpenseComponent
  },
  {
    path: 'update-expense/:id',
    component: UpdateExpenseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
