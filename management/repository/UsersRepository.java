package com.data.management.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.data.management.Dto.LoginDto;
import com.data.management.model.ModelUsers;
@Repository
public interface UsersRepository extends JpaRepository<ModelUsers, Integer>{

	Boolean save(LoginDto logindto);

	ModelUsers findByEmail(String email);

	ModelUsers findBypassword(String password); 

}
