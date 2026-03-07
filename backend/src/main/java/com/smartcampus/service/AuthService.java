package com.smartcampus.service;

import org.springframework.stereotype.Service;

@Service
public class AuthService {

    // TODO: Inject UserRepository, PasswordEncoder, JwtTokenProvider

    // TODO: Implement register(RegisterRequest request)
    //   1. Check if email already exists
    //   2. Hash the password with BCryptPasswordEncoder
    //   3. Save the user to MongoDB
    //   4. Generate JWT token
    //   5. Return AuthResponse

    // TODO: Implement login(LoginRequest request)
    //   1. Find user by email
    //   2. Verify password with BCryptPasswordEncoder
    //   3. Generate JWT token
    //   4. Return AuthResponse
}
