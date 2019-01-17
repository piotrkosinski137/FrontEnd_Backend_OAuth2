package com.udemy.oauth2.udemyoauth2.controller;


import com.udemy.oauth2.udemyoauth2.model.Task;
import com.udemy.oauth2.udemyoauth2.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.List;

@RestController
public class TaskController {

    @Autowired
    private TaskRepository taskRepository;

    @PostMapping(value = "/getTasks",  produces= MediaType.APPLICATION_JSON_VALUE)
    public List<Task> getTasksForUser(Principal principal) {
        return taskRepository.findByHolderName(principal.getName());
    }

    @PostMapping("/insertTask")
    public ResponseEntity<Void> addTaskForUser(Principal principal, String task) {
        Task t = new Task(principal.getName(), task);

        taskRepository.save(t);

        return new ResponseEntity<Void>(HttpStatus.CREATED);
    }
}
