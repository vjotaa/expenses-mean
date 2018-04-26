var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ExpenseSchema = Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

var Expense = (module.exports = mongoose.model('expenses', ExpenseSchema));
