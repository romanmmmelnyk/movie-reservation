# Movie Reservation System

PROJECT_URL: https://roadmap.sh/projects/movie-reservation-system

## Overview

The goal of this project is to help you understand how to implement complex business logic i.e. seat reservation and scheduling, thinking about the data model and relationships, and complex queries.

## Key Functionalities

### 1. User Authentication
- **Signup**: New users can create an account.
- **Login**: Users can log in to access their accounts.
- **Role Management**: Users can be promoted to admin status, allowing for additional privileges.
- **JWT-based Authentication**: Secure access to the API using JSON Web Tokens.

### 2. Movie Management
- **CRUD Operations**: Admins can create, read, update, and delete movie entries.
- **Fetch Movie Details**: Both admins and users can view movie information.

### 3. Showtime Management
- **CRUD Operations**: Admins can manage showtimes for movies.
- **Fetch Showtimes**: Users can view available showtimes for specific movies on given dates.

### 4. Reservation Management
- **Fetch Available Seats**: Users can check available seats for a specific showtime.
- **Reserve Seats**: Users can reserve seats for a showtime.
- **View and Cancel Reservations**: Users can view their upcoming reservations and cancel them if needed.
- **Admin View**: Admins can view all reservations, including capacity and revenue statistics.

### 5. Reporting
- **Generate Reports**: Admins can generate reports on reservations, including total revenue and statistics per movie.
