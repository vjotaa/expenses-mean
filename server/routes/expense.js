const express = require('express');
const ExpenseController = require('../controller/expense');
const router = express.Router();
router.get('/conta/gastos', ExpenseController.expenses);
router.put('/conta/gasto/:id', ExpenseController.updateExpense);
router.post('/conta/gasto', ExpenseController.newExpense);
router.delete('/conta/gasto/:id', ExpenseController.deleteExpense);

module.exports = router;
