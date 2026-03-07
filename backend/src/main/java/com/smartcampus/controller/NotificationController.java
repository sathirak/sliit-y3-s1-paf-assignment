package com.smartcampus.controller;

import com.smartcampus.dto.response.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/notifications")
public class NotificationController {

    // TODO: Inject NotificationService

    @GetMapping
    public ResponseEntity<?> getUserNotifications(/* Authentication authentication */) {
        // TODO: Get current user's notifications
        return ResponseEntity.ok(ApiResponse.success("Get notifications endpoint - implement me!"));
    }

    @GetMapping("/unread-count")
    public ResponseEntity<?> getUnreadCount(/* Authentication authentication */) {
        // TODO: Get unread notification count for current user
        return ResponseEntity.ok(ApiResponse.success("Unread count endpoint - implement me!"));
    }

    @PutMapping("/{id}/read")
    public ResponseEntity<?> markAsRead(@PathVariable String id) {
        // TODO: Mark a single notification as read
        return ResponseEntity.ok(ApiResponse.success("Mark as read endpoint - implement me!"));
    }

    @PutMapping("/read-all")
    public ResponseEntity<?> markAllAsRead(/* Authentication authentication */) {
        // TODO: Mark all notifications as read for current user
        return ResponseEntity.ok(ApiResponse.success("Mark all as read endpoint - implement me!"));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteNotification(@PathVariable String id) {
        // TODO: Delete a notification
        return ResponseEntity.ok(ApiResponse.success("Delete notification endpoint - implement me!"));
    }
}
