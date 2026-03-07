package com.smartcampus.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "users")
public class User {

    @Id
    private String id;

    private String firstName;
    private String lastName;

    @Indexed(unique = true)
    private String email;

    private String password;

    @Builder.Default
    private Role role = Role.USER;

    @Builder.Default
    private AuthProvider authProvider = AuthProvider.LOCAL;

    private String providerId;
    private String profileImageUrl;

    @Builder.Default
    private boolean enabled = true;

    @CreatedDate
    private LocalDateTime createdAt;

    @LastModifiedDate
    private LocalDateTime updatedAt;

    // ---- Enums ----

    public enum Role {
        USER, ADMIN, TECHNICIAN, MANAGER
    }

    public enum AuthProvider {
        LOCAL, GOOGLE
    }
}
