OCA Full Stack Assignment
This project is a full-stack web application built using PHP (backend) and React (frontend), following the MVC (Model-View-Controller) architecture on the backend. It provides user authentication and displays interactive maps of Pakistan on the dashboard.

📂 Features
User Signup (API)
User Login (API)
User Logout (API)
Session management using PHP
Secure login flow with session handling
Guest login (no authentication required)
React frontend with protected routes
Display of two Pakistan maps:
Interactive hover map
Zoomable map
🏗️ Architecture
Backend: PHP MVC
Model: Handles all database interactions (e.g., login_model.php)
View: React acts as the view layer on the frontend
Controller: Business logic for handling API requests (e.g., login_controller.php)
📦 Tech Stack
Frontend: React JS
Backend: PHP (with MVC structure)
Database: MySQL (using PDO)
Libraries Used:
jVectorMap – For rendering Pakistan maps
API Format: JSON (POST requests)
🚀 Getting Started
1. Clone the Repository
git clone https://github.com/your-username/oca-assignment.git


Backend Setup (PHP + MySQL)
bash
Copy
Edit
cd Server
php -S localhost:8000

Ensure database connection in includes/dbHandler.php

Import the provided .sql file to set up your MySQL database


Frontend Setup (React)
bash
Copy
Edit
cd ../Client/oca-client
npm install
npm start


👤 How to Use
After the client is running:

Sign Up — Register with username, email, and password

Log In — Authenticate using your credentials

Guest Log In — No auth needed, explore directly

On Successful Login
You’ll see two maps of Pakistan:

Hoverable Map – Highlights states on mouseover

Zoomable Map – Interactively zoom into regions



🧠 Notes
PHP sessions are used for managing logged-in states.

Unauthorized users are blocked from accessing protected routes.

Guest users bypass authentication and can directly view maps.
