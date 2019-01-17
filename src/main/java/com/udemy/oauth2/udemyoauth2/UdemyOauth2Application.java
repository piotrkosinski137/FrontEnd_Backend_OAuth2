package com.udemy.oauth2.udemyoauth2;

import com.udemy.oauth2.udemyoauth2.model.Role;
import com.udemy.oauth2.udemyoauth2.model.User;
import com.udemy.oauth2.udemyoauth2.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class UdemyOauth2Application implements CommandLineRunner {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	public static void main(String[] args) {
		SpringApplication.run(UdemyOauth2Application.class, args);
	}


	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Override
	public void run(String... args) throws Exception {
		userRepository.save(new User("55",passwordEncoder.encode("55"), Role.USER ));
		userRepository.save(new User("66",passwordEncoder.encode("66"), Role.ADMIN ));
	}
}

