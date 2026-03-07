package com.smartcampus.controller;

import com.smartcampus.dto.response.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    // TODO: Inject UserService

    @GetMapping
    public ResponseEntity<?> getAllUsers() {
        // TODO: Return list of all users (ADMIN only)
        return ResponseEntity.ok(ApiResponse.success("Get all users endpoint - implement me!"));
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getUserById(@PathVariable String id) {
        // TODO: Return user by ID
        return ResponseEntity.ok(ApiResponse.success("Get user by ID endpoint - implement me!"));
    }

    @PutMapping("/{id}/role")
    public ResponseEntity<?> updateUserRole(@PathVariable String id /*, @RequestBody Map<String, String> body */) {
        // TODO: Update user role (ADMIN only)
        return ResponseEntity.ok(ApiResponse.success("Update user role endpoint - implement me!"));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable String id) {
        // TODO: Delete user (ADMIN only)
        return ResponseEntity.ok(ApiResponse.success("Delete user endpoint - implement me!"));
    }
}
