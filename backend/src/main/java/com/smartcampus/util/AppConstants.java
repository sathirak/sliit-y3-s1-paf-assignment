package com.smartcampus.util;

public final class AppConstants {

    private AppConstants() {
        // Prevent instantiation
    }

    // Pagination defaults
    public static final String DEFAULT_PAGE_NUMBER = "0";
    public static final String DEFAULT_PAGE_SIZE = "10";

    // Roles
    public static final String ROLE_USER = "ROLE_USER";
    public static final String ROLE_ADMIN = "ROLE_ADMIN";
    public static final String ROLE_TECHNICIAN = "ROLE_TECHNICIAN";
    public static final String ROLE_MANAGER = "ROLE_MANAGER";

    // JWT
    public static final String TOKEN_PREFIX = "Bearer ";
    public static final String HEADER_STRING = "Authorization";
}
