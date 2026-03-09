package com.smartcampus.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    private static final Logger log = LoggerFactory.getLogger(EmailService.class);

    private final JavaMailSender mailSender;

    @Value("${spring.mail.username:noreply@smartcampus.com}")
    private String fromEmail;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    @Async
    public void sendEmail(String to, String subject, String body) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(fromEmail);
            message.setTo(to);
            message.setSubject(subject);
            message.setText(body);

            mailSender.send(message);
            log.info("Email sent to {} with subject: {}", to, subject);
        } catch (Exception e) {
            log.error("Failed to send email to {}: {}", to, e.getMessage());
        }
    }

    @Async
    public void sendBookingStatusEmail(String toEmail, String userName, String bookingTitle, String newStatus) {
        String subject = "Booking Update: " + bookingTitle;
        String body = String.format(
                """
                Hi %s,

                Your booking "%s" has been updated.

                New Status: %s

                Please log in to Smart Campus to view the details.

                — Smart Campus Operations Hub
                """,
                userName, bookingTitle, newStatus
        );

        sendEmail(toEmail, subject, body);
    }

    @Async
    public void sendTicketUpdateEmail(String toEmail, String userName, String ticketTitle, String update) {
        String subject = "Ticket Update: " + ticketTitle;
        String body = String.format(
                """
                Hi %s,

                There's an update on your ticket "%s":

                %s

                Please log in to Smart Campus to view the details.

                — Smart Campus Operations Hub
                """,
                userName, ticketTitle, update
        );

        sendEmail(toEmail, subject, body);
    }

    @Async
    public void sendWelcomeEmail(String toEmail, String userName) {
        String subject = "Welcome to Smart Campus!";
        String body = String.format(
                """
                Hi %s,

                Welcome to Smart Campus Operations Hub!

                You can now:
                • Browse and book campus facilities
                • Submit maintenance tickets
                • Receive real-time notifications

                Get started by logging in at http://localhost:5173

                — Smart Campus Operations Hub
                """,
                userName
        );

        sendEmail(toEmail, subject, body);
    }
}
