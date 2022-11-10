package com.example.reliaBooksApplication.serviceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.reliaBooksApplication.entity.Expense;
import com.example.reliaBooksApplication.entity.User;
import com.example.reliaBooksApplication.repository.UserRepository;
import com.example.reliaBooksApplication.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;

	@Override
	public User saveUser(User user) throws Exception {
		return userRepository.save(user);
	}

	@Override
	public User fetchUserByEmail(String email) {
		return userRepository.findByEmail(email);
	}
	
	@Override
	public User fetchUserByEmailAndPassword(String email, String password) {
		return userRepository.findByEmailAndPassword(email, password);
	}

	@Override
	public List<User> getUser() {
		return userRepository.findAll();
	}

	@Override
	public Optional<User> fetchUserById(String id) {
		return Optional.ofNullable(userRepository.findById(id));
	}
//
//	@Override
//	public Expense updateExpenseById(String email, String id, Expense expense) {
//		// TODO Auto-generated method stub
//		
//	}

	@Override
	public Expense getRequestedExpense(String email, String expenseid) throws Exception {
		User user = fetchUserByEmail(email);
		List<Expense> list = user.getExpenses();
		Expense res = null;
		for(Expense e : list) {
			if(e.getId().toString().equals(expenseid)) {
				res = e;
				break;
			}
		}
		if(res == null) {
			throw new Exception("Expense with " + expenseid + "Not Found!");
		}
		return res;
	}

@Override
public Expense updateExpenseById(String email, String expenseid, Expense expense) throws Exception {
	// TODO Auto-generated method stub
	Expense savedExpense = getRequestedExpense(email, expenseid);
	savedExpense.setExpenseType(expense.getExpenseType());
	savedExpense.setFinancialType(expense.getExpenseType());
	savedExpense.setAmount(expense.getAmount());
	savedExpense.setDate(expense.getDate());
	savedExpense.setAssetType(expense.getAssetType());
	savedExpense.setTransactionType(expense.getTransactionType());
	savedExpense.setFinancialType(expense.getFinancialType());
	savedExpense.setNotes(expense.getNotes());
	savedExpense.setStatus(expense.getStatus());
	savedExpense.setPaymentType(expense.getPaymentType());
	savedExpense.setSgst(expense.getSgst());
	savedExpense.setCgst(expense.getCgst());
	savedExpense.setIgst(expense.getIgst());
	savedExpense.setSupplierName(expense.getSupplierName());
	User user = fetchUserByEmail(email);
	List<Expense> list = user.getExpenses();
	for(int i = 0 ; i < list.size() ; i++) {
		if(list.get(i).getId().toString().equals(expenseid)) {
			list.set(i, savedExpense);
			saveUser(user);
			break;
		}
	}
	return savedExpense;
}

@Override
public void deleteExpenseById(String email, String expenseid) throws Exception {
	// TODO Auto-generated method stub
	User user = fetchUserByEmail(email);
	List<Expense> list = user.getExpenses();
	for(int i = 0 ; i < list.size() ; i++) {
		if(list.get(i).getId().toString().equals(expenseid)) {
			list.remove(i);
			saveUser(user);
			break;
		}
	}
}
}

	
