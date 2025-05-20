package com.data.management.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.data.management.Dto.LoginDto;
import com.data.management.model.ModelTask;
import com.data.management.model.ModelUsers;
import com.data.management.service.ServiceManagement;

@RestController
@CrossOrigin("*")
public class UsersController {
	
	@Autowired
	ServiceManagement serviceManagement;
	
	@PostMapping("/registration")
	public ModelUsers saveData(@RequestBody ModelUsers modelUsers) {
		return serviceManagement.saveData(modelUsers);
	}
	
		@PostMapping("/Login")
		public Boolean finallModelUsers(@RequestBody LoginDto logindto){
			System.out.println(logindto.getEmail()+"   "+logindto.getPassword());
			return serviceManagement.getUserStatus(logindto);	
		}
		@GetMapping("/showdata")
		public List<ModelUsers> getAllmodelusers(){
			return serviceManagement.getAllmodelusers();
		}
		
		@GetMapping("/user/{userId}")
		public ResponseEntity<ModelUsers> getModelUserByuserId(@PathVariable int userId){
			ModelUsers modelUsers = serviceManagement.getModelUserByUserId(userId);
			if(modelUsers == null)
				return ResponseEntity.notFound().build();
			return ResponseEntity.ok(modelUsers);
		}
	}
