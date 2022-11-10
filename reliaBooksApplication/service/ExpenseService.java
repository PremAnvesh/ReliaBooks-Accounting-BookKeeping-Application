package com.example.reliaBooksApplication.service;

import java.util.List;
import java.util.Optional;

import com.example.reliaBooksApplication.entity.Expense;

public interface ExpenseService {
	Expense saveExpense(Expense expense);
	List<Expense> getExpenses();
	void deleteExpense(Expense expense);
	Expense getExpenseById(String id);
	Expense updateExpenseById(Expense expense,String id);
	void deleteExpenseById(String id);
}
