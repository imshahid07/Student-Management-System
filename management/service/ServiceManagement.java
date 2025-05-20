package com.data.management.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.data.management.Dto.AdDto;
import com.data.management.Dto.LoginDto;
import com.data.management.Dto.MtaskDto;
import com.data.management.Dto.taskDto;
import com.data.management.model.ModelTask;
import com.data.management.model.ModelUsers;
import com.data.management.repository.TaskRepository;
import com.data.management.repository.UsersRepository;

@Service
public class ServiceManagement {

	
	@Autowired
	TaskRepository taskRepository;

	@Autowired
	UsersRepository usersRepository;

	public ModelUsers saveData(ModelUsers modelUsers) {
		return usersRepository.save(modelUsers);
	}

//	public ModelTask dataTask(AdDto adt) {
//		ModelTask mt = new ModelTask();
//		mt.setId(taskRepository.findById(adt.getUserId()).get());
//		
//	}

	public Boolean getUserStatus(LoginDto logindto) {
		ModelUsers modeldata = usersRepository.findByEmail(logindto.getEmail());

		if (modeldata != null) {

			if (modeldata.getEmail().equals(modeldata.getEmail())
					&& modeldata.getPassword().equals(modeldata.getPassword()))
				return true;
			else
				return false;
		} else
			return false;
	}

	public List<ModelUsers> getAllmodelusers() {
		return usersRepository.findAll();
	}

	public ModelUsers getModelUserByUserId(int userId) {
		return usersRepository.findById(userId).orElse(null);
	}

	public List<taskDto> getAllTaskusers() {
		ArrayList<taskDto> td = new ArrayList<>();
		List<ModelTask> modelusers = taskRepository.findAll();
		if (modelusers != null) {
			for (ModelTask m : modelusers) {
				taskDto t = new taskDto();
				t.setId(m.getId());
				t.setDescription(m.getDescription());
				t.setTitle(m.getTitle());
				t.setUserId(m.getCreatedBy().getUserId());
				td.add(t);
			}
			
			
			return td;

		} else
			return null;

	}

	public ModelTask getModelTaskByUserId(int id) {
		return taskRepository.findById(id).orElse(null);
	}

	public ModelTask updateModelTask(MtaskDto modelTask) {
			
		System.out.println(modelTask);
		ModelTask m = new ModelTask();
		m.setId(modelTask.getId());
		m.setTitle(modelTask.getTitle());
		m.setDescription(modelTask.getDescription());
		m.setCreatedBy(usersRepository.findById(modelTask.getUserId()).get());
		System.out.println(m);
		return taskRepository.save(m);
	}

	public void deleteModelTask(int id) {
		taskRepository.deleteById(id);

	}

	public ModelTask dataTask(ModelTask adt) {
		return taskRepository.save(adt);
	}

}
