package com.example.reliaBooksApplication.entity;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "usersList")
public class User {

	@Id
	private String id;
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}
	private String userName;
	private String email;
	private String password;
	private String occupation;
	private List<Expense> expenses;
	
	
	public User() {
		super();
	}
	
	
	
	public User(String userName, String email, String password, String occupation, List<Expense> expenses) {
		super();
		this.userName = userName;
		this.email = email;
		this.password = password;
		this.occupation = occupation;
		this.expenses = expenses;
	}

	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getOccupation() {
		return occupation;
	}
	public void setOccupation(String occupation) {
		this.occupation = occupation;
	}
	public List<Expense> getExpenses() {
		return expenses;
	}
	public void setExpenses(List<Expense> expenses) {
		this.expenses = expenses;
	}
	
	
}
