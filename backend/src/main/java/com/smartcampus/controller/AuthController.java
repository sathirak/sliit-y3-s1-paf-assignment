package com.smartcampus.controller;

import com.smartcampus.dto.response.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    // TODO: Inject AuthService

    @PostMapping("/register")
    public ResponseEntity<?> register(/* @Valid @RequestBody RegisterRequest request */) {
        // TODO: Implement registration endpoint
        return ResponseEntity.ok(ApiResponse.success("Registration endpoint - implement me!"));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(/* @Valid @RequestBody LoginRequest request */) {
        // TODO: Implement login endpoint
        return ResponseEntity.ok(ApiResponse.success("Login endpoint - implement me!"));
    }

    @GetMapping("/me")
    public ResponseEntity<?> getCurrentUser(/* Authentication authentication */) {
        // TODO: Get current user from SecurityContext and return UserResponse
        return ResponseEntity.ok(ApiResponse.success("Get current user endpoint - implement me!"));
    }
}
