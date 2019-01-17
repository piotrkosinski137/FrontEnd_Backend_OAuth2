package com.udemy.oauth2.udemyoauth2.repository;

import com.udemy.oauth2.udemyoauth2.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {

    Optional<User> findByUsername(String username);

}
