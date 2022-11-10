package com.example.reliaBooksApplication.service;
import java.util.List;
import java.util.Optional;

import com.example.reliaBooksApplication.entity.Expense;
import com.example.reliaBooksApplication.entity.User;

public interface UserService {
	public User saveUser(User user) throws Exception;
	public User fetchUserByEmail(String email) ; 
	public User fetchUserByEmailAndPassword(String email,String password); 
	public Optional<User> fetchUserById(String id);
	public Expense getRequestedExpense(String email,String expenseid) throws Exception;
	public Expense updateExpenseById(String email , String expenseid, Expense expense) throws Exception;
	public void deleteExpenseById(String email , String expenseid) throws Exception;
	public List<User> getUser();
}
