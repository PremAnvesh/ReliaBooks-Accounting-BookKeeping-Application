package com.example.reliaBooksApplication.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.example.reliaBooksApplication.entity.Expense;

public interface ExpenseRepository extends MongoRepository<Expense , Integer> {
	@Query("{'_id': ?0}")
    Expense findById(String id);
	
	@Query(value="{'_id' : ?0}", delete = true)
	Expense deleteById(String id);
}
