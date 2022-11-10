package com.example.reliaBooksApplication.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.reliaBooksApplication.entity.Expense;
import com.example.reliaBooksApplication.repository.ExpenseRepository;
import com.example.reliaBooksApplication.service.ExpenseService;

@Service
public class ExpenseServiceImpl implements ExpenseService{

	@Autowired
	private ExpenseRepository expenseRepository;

	public ExpenseServiceImpl(ExpenseRepository expenseRepository) {
		super();
		this.expenseRepository = expenseRepository;
	}

	@Override
	public Expense saveExpense(Expense expense) {
		return expenseRepository.save(expense);
	}

	@Override
	public List<Expense> getExpenses() {
		// TODO Auto-generated method stub
		return expenseRepository.findAll();
	}

	@Override
	public void deleteExpense(Expense expense) {
		// TODO Auto-generated method stub
		expenseRepository.delete(expense);
	}


	@Override
	public Expense getExpenseById(String id) {
		// TODO Auto-generated method stub
		return expenseRepository.findById(id);
	}

	@Override
	public Expense updateExpenseById(Expense expense,String id) {
		// TODO Auto-generated method stub
		Expense savedExpense = getExpenseById(id);
//		System.out.println(savedExpense.getId());
		savedExpense.setExpenseType(expense.getExpenseType());
		savedExpense.setAmount(expense.getAmount());
		savedExpense.setDate(expense.getDate());
		savedExpense.setAssetType(expense.getAssetType());
		savedExpense.setTransactionType(expense.getTransactionType());
		savedExpense.setFinancialType(expense.getFinancialType());
		savedExpense.setNotes(expense.getNotes());
		savedExpense.setSgst(expense.getSgst());
		savedExpense.setCgst(expense.getCgst());
		savedExpense.setIgst(expense.getIgst());
		savedExpense.setSupplierName(expense.getSupplierName());
		return expenseRepository.save(savedExpense);
	}

	@Override
	public void deleteExpenseById(String id) {
		// TODO Auto-generated method stub
		expenseRepository.deleteById(id);
	}
	
	




		
}
