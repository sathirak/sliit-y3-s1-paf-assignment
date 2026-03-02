# 🏫 Smart Campus Operations Hub

> **IT3030 - Programming Applications and Frameworks**
> SLIIT | Year 3 | Semester 1 | PAF Assignment 2026

A full-stack web application to modernize campus operations — facility/asset management, booking workflows, maintenance ticketing, and notifications.

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Backend** | Java 17, Spring Boot 3.2.5, Spring Security, Spring Data MongoDB |
| **Frontend** | React 19 (Vite), Axios, React Router |
| **Database** | MongoDB Atlas (Free Tier) |
| **Auth** | JWT + OAuth 2.0 (Google Sign-In) |
| **Email** | Spring Mail (Mailtrap / SendGrid) |
| **CI/CD** | GitHub Actions |

---

## 📂 Project Structure

```
├── backend/                  # Spring Boot REST API
│   ├── src/main/java/com/smartcampus/
│   │   ├── config/           # Security, CORS, MongoDB configs
│   │   ├── controller/       # REST controllers
│   │   ├── dto/              # Request/Response DTOs
│   │   │   ├── request/
│   │   │   └── response/
│   │   ├── exception/        # Global exception handler
│   │   ├── model/            # MongoDB document models
│   │   ├── repository/       # MongoDB repositories
│   │   ├── security/         # JWT filter, auth providers
│   │   ├── service/          # Business logic layer
│   │   └── util/             # Utility classes
│   └── src/main/resources/
│       └── application.properties
│
├── frontend/                 # React Client App
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   │   ├── layout/       # Navbar, Sidebar, Footer
│   │   │   └── common/       # Buttons, Cards, Modals
│   │   ├── pages/            # Page-level components
│   │   │   ├── auth/         # Login, Register
│   │   │   ├── dashboard/
│   │   │   ├── facilities/
│   │   │   ├── bookings/
│   │   │   ├── tickets/
│   │   │   └── notifications/
│   │   ├── services/         # API service functions
│   │   ├── context/          # React Context (Auth, Theme)
│   │   ├── hooks/            # Custom React hooks
│   │   ├── utils/            # Helper functions
│   │   └── assets/           # Images, icons
│   └── vite.config.js
│
└── .github/workflows/ci.yml  # GitHub Actions CI/CD
```

---

## 🚀 Getting Started

### Prerequisites
- **Java 17** (JDK) — or use IntelliJ's bundled JDK
- **Node.js 20+** and **npm**
- **MongoDB Atlas** account (free tier)

### 1. Clone the Repository
```bash
git clone https://github.com/<your-username>/sliit-y3-s1-paf-assignment.git
cd sliit-y3-s1-paf-assignment
```

### 2. Backend Setup
1. Open the `backend/` folder in **IntelliJ IDEA**
2. IntelliJ will auto-detect the Maven project and download dependencies
3. Update `backend/src/main/resources/application.properties`:
   - Replace MongoDB Atlas URI with your connection string
   - Add your Google OAuth client ID and secret
   - Add your Mailtrap/SendGrid credentials
4. Run `SmartCampusApplication.java` → starts on **http://localhost:8080**

### 3. Frontend Setup
```bash
cd frontend
npm install        # already done if cloned fresh
npm run dev        # starts on http://localhost:5173
```

### 4. Environment Variables
Create a `.env` file or update `application.properties` with:

| Variable | Description |
|----------|-------------|
| `spring.data.mongodb.uri` | MongoDB Atlas connection string |
| `app.jwt.secret` | JWT signing secret (min 256 bits) |
| `spring.security.oauth2.client.registration.google.client-id` | Google OAuth Client ID |
| `spring.security.oauth2.client.registration.google.client-secret` | Google OAuth Client Secret |
| `spring.mail.username` | Mailtrap/SendGrid username |
| `spring.mail.password` | Mailtrap/SendGrid password |

---

## 👥 Team Work Allocation

| Member | Modules |
|--------|---------|
| Imasha | Facilities catalogue + resource management endpoints |
| Lumini | Booking workflow + conflict checking logic |
| Sathira | Incident tickets + attachments + technician updates |
| Adeesha | Notifications + role management + OAuth integration |

---

## 📋 License
This project is developed for academic purposes at SLIIT.
