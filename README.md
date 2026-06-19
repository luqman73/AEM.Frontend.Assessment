# AEM Dashboard (Angular 14 Assessment)

This is a dashboard application built using **Angular 14**, **Bootstrap 4**, and **Chart.js** as part of a technical assessment.

It includes authentication, route protection, API integration, and data visualization.

---

## Tech Stack

- Angular 14
- Angular CLI
- Bootstrap 4
- Chart.js
- RxJS
- NPM

---

## Features

### Authentication
- Login form with validation
- API-based authentication
- Bearer token stored in localStorage
- Error handling for invalid login
- Route guard protection for dashboard

### Dashboard
- Protected route (requires authentication)
- Bar chart visualization (Chart.js)
- Donut chart visualization (Chart.js)
- User table display from API data

### Security
- AuthGuard prevents unauthorized access
- Token-based API authentication
- Logout functionality clears session

---

## Login Credentials

Use the following credentials to log in:

Email: user@aemenersol.com  
Password: Test@123

For testing failed login, you can enter any incorrect email or password.

Note: The Sign In button is disabled until a valid email format is entered in the username field.

---

## API Used

### Login
POST http://test-demo.aemenersol.com/api/account/login

### Dashboard
GET http://test-demo.aemenersol.com/api/dashboard

---

## How to Run the Project

npm install  
ng serve  

Navigate to:
http://localhost:4200/

---

## Project Structure

- Auth module (login + guard)
- Dashboard module (charts + table)
- Services (API handling)
- Routing module (protected routes)

---

## Notes

- Built as part of a frontend assessment
- Focus on Angular fundamentals, API integration, and UI structure
- Bootstrap used for layout and responsiveness
- Chart.js used for data visualization

---
