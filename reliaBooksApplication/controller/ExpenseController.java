package com.example.reliaBooksApplication.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.config.RepositoryNameSpaceHandler;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.reliaBooksApplication.entity.Expense;
import com.example.reliaBooksApplication.serviceImpl.ExpenseServiceImpl;
@RestController
@RequestMapping("/v1/api")
@CrossOrigin(origins = "http://localhost:4200/")
public class ExpenseController {
	@Autowired
	ExpenseServiceImpl expenseService;
	
	
	@GetMapping("/hello")
	public String helloWorld() {
		return "Hello World";
	}
	
	@GetMapping("/expenses")
	public ResponseEntity<List<Expense>> getExpenseData(){
		return new ResponseEntity<List<Expense>>(expenseService.getExpenses(),HttpStatus.OK);
	}
	
	@GetMapping("/expenses/{id}")
	public ResponseEntity<Expense> getExpenseById(@PathVariable String id){
		return new ResponseEntity<Expense>(expenseService.getExpenseById(id),HttpStatus.OK);
	}
	
	@PostMapping("/expenses")
	public ResponseEntity<Expense> postExpenseData(@RequestBody Expense expense) {
		return new ResponseEntity<Expense>(expenseService.saveExpense(expense),HttpStatus.CREATED);
	}
	
	@DeleteMapping("/expenses")
	public ResponseEntity<String> deleteExpenseData(@RequestBody Expense expense){
		expenseService.deleteExpense(expense);
		return new ResponseEntity<String>("Record Deleted" , HttpStatus.ACCEPTED);
	}
	
	@DeleteMapping("/expenses/{id}")
	public ResponseEntity<String> deleteExpenseByID(@PathVariable String id) {
	expenseService.deleteExpenseById(id);	
	return new ResponseEntity<String>("Record Deleted" , HttpStatus.ACCEPTED);
	}
	

	@PutMapping("/expenses/{id}")
	public ResponseEntity<Expense> updateExpenseById(@RequestBody Expense expense,@PathVariable String id){
		return new ResponseEntity<Expense>(expenseService.updateExpenseById(expense, id),HttpStatus.ACCEPTED);
	}
}
