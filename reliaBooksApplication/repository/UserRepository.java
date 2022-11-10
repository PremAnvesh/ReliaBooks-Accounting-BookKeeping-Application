package com.example.reliaBooksApplication.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.reliaBooksApplication.entity.User;

public interface UserRepository extends MongoRepository<User, Integer> {
	public User findByEmail(String email);
	public User findByEmailAndPassword(String email,String password);
	public User findById(String id);
	
}
