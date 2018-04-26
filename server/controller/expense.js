const Expense = require('../models/expense');

module.exports = {
  expenses: async (req, res) => {
    try {
      const expenses = await Expense.find({}).sort({ date: 'desc' });
      res.status(200).json(expenses);
      res.status(200).json({ msg: 'OK' });
    } catch (err) {
      console.error(`ERROR: ${err}`);
    }
  },
  newExpense: async (req, res) => {
    expense = new Expense();
    try {
      expense.name = req.body.name;
      expense.price = req.body.price;
      const expenseStorage = await expense.save();
      res.status(200).json(expenseStorage);
      res.status(200).json({ msg: 'OK' });
    } catch (err) {
      console.error(`ERROR: ${err}`);
    }
  },

  updateExpense: async (req, res) => {
    const newExpense = req.body;
    try {
      const { id } = req.params;
      const oldExpense = await Expense.findByIdAndUpdate(id, newExpense);
      res.status(200).json(oldExpense);
      res.status(200).json({ msg: 'OK' });
    } catch (err) {
      console.error(`ERROR: ${err}`);
    }
  },

  deleteExpense: async (req, res) => {
    try {
      const { id } = req.params;
      const newExpense = req.body;
      const oldExpense = await Expense.findByIdAndRemove(id, newExpense);
      res.status(200).json({ msg: 'OK' });
    } catch (err) {
      console.error(`ERROR: ${err}`);
    }
  }
};
