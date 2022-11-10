package com.example.reliaBooksApplication.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
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
import com.example.reliaBooksApplication.entity.User;
import com.example.reliaBooksApplication.service.ExpenseService;
import com.example.reliaBooksApplication.service.UserService;


@RestController
@CrossOrigin(origins="http://localhost:4200/")
@RequestMapping("v2/api/")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private ExpenseService expenseService;
	
	@GetMapping(path="/hello")
	public String hello() {
		return "Hello World";
	}

	@PostMapping("/registration/signup")
	public User saveUser(@RequestBody User user)throws Exception {
		String emailId = user.getEmail();
		if(emailId!=null && !"".equals(emailId)) {
			User userobj=userService.fetchUserByEmail(emailId);
			if(userobj!=null) {
				throw new Exception("User with " + emailId + " already exists!");
			}
		}
		return userService.saveUser(user);
	}
	

	@PostMapping("/registration/signin")
	public User loginUser(@RequestBody User user) throws Exception {
		String email=user.getEmail();
		String password=user.getPassword();
		User userobj=null;
		if(email!=null && password!=null) {
			 userobj=userService.fetchUserByEmailAndPassword(email, password);
		}
		if(userobj==null) {
			throw new Exception("Bad Credentials");
		}
		return userobj;
	}
	
	@GetMapping("/{email}")
	public User getUserByEmail(@PathVariable String email) {
		return userService.fetchUserByEmail(email);
	}
	
	@GetMapping("/expenses/{email}")
	public List<Expense> getExpensesofUser(@PathVariable String email){
		User user = userService.fetchUserByEmail(email);
		return user.getExpenses();
	}
	
	@GetMapping("expenses/{email}/{expenseid}")
	public ResponseEntity<Expense> getRequestedExpense(@PathVariable String email,@PathVariable String expenseid) throws Exception{
		return new ResponseEntity<Expense>(userService.getRequestedExpense(email, expenseid),HttpStatus.OK);
	}
	
	@PutMapping("expenses/{email}/{expenseid}")
	public ResponseEntity<Expense> updateExpenseData(@PathVariable String email,@PathVariable String expenseid,@RequestBody Expense newExpense) throws Exception{
		return new ResponseEntity<Expense>(userService.updateExpenseById(email, expenseid, newExpense), HttpStatus.ACCEPTED);
	}
	
	@PostMapping("/expenses/{id}")
    public User saveExpenseDetails(@PathVariable String id,@RequestBody Expense expense) throws Exception {
        Optional<User> userID=userService.fetchUserById(id);
         if(userID.isPresent()) {
             User user=userID.get();
             List<Expense> expenseList=user.getExpenses();
             expenseList.add(expense);
             User ans=userService.saveUser(user);
             return ans;
         }
        return null;
    }
	
	@DeleteMapping("/expenses/{email}/{expenseid}")
	public ResponseEntity<String> deleteExpense(@PathVariable String email , @PathVariable String expenseid) throws Exception {
		userService.deleteExpenseById(email, expenseid);
		return new ResponseEntity<String>("Expense Deleted Successfully",HttpStatus.OK);
	}
        

	
}
