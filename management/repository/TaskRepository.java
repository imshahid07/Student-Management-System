package com.data.management.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.data.management.Dto.AdDto;
import com.data.management.Dto.MtaskDto;
import com.data.management.model.ModelTask;
@Repository
public interface TaskRepository extends JpaRepository<ModelTask, Integer> {

	ModelTask save(AdDto adt);

}
