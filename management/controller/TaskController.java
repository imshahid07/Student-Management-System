package com.data.management.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.data.management.Dto.AdDto;
import com.data.management.Dto.MtaskDto;
import com.data.management.Dto.taskDto;
import com.data.management.model.ModelTask;
import com.data.management.model.ModelUsers;
import com.data.management.service.ServiceManagement;

@RestController
@CrossOrigin("*")
public class TaskController {
	
	@Autowired
	ServiceManagement serviceManagement;
	
	@PostMapping("/addData")
	public ModelTask dataTask(@RequestBody ModelTask adt) {
		return serviceManagement.dataTask(adt);
  }
	@GetMapping("/showtable")
	public List<taskDto> getAllTaskusers(){
		return  serviceManagement.getAllTaskusers();
	}
	
	@GetMapping("/showTask/{id}")
	public ResponseEntity<ModelTask> getModelTaskByuserId(@PathVariable int id){
		ModelTask modelTask = serviceManagement.getModelTaskByUserId(id);
		if(modelTask == null)
			return ResponseEntity.notFound().build();
		return ResponseEntity.ok(modelTask);
  }
	@PostMapping("/updateTask")
	public ModelTask updateModelTask(@RequestBody MtaskDto modelTask) {
		return serviceManagement.updateModelTask(modelTask);
		//modelTask.getId()
	}
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteModelTask(@PathVariable int id){
		//MtaskDto mtd = serviceManagement.deleteModelTask(id);
		//if (mtd == null)
			//return ResponseEntity.notFound().build();
		serviceManagement.deleteModelTask(id);
		return ResponseEntity.ok().build();
	}
	}
