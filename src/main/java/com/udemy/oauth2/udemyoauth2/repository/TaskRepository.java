package com.udemy.oauth2.udemyoauth2.repository;

import com.udemy.oauth2.udemyoauth2.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TaskRepository extends JpaRepository<Task, Long> {

    List<Task> findByHolderName(String holderName);
}
