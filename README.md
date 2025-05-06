🌱 OCA Full Stack Assignment
This is a full-stack web application developed for the Organic Cotton Accelerator assignment. It features a custom PHP MVC backend and a React.js frontend, implementing authentication, session handling, and an interactive map of Pakistan using jVectorMap.

🔗 Live Demo
Frontend: https://oca-assignment-yx18.vercel.app/

⚠️ Please use the Guest Login button as the server is not hosted remotely.

📌 Assignment Sections

1. 🛠️ Custom PHP MVC Framework
   Built a mini PHP MVC framework from scratch

Features:

Custom routing system supporting GET and POST

Controller/View architecture with a clean folder structure

View rendering via basic PHP templating

Basic error handling (404 pages, exceptions)

📁 Located in the /Server folder

2. 🔐 REST API in PHP
   Mock REST API used by the React frontend for authentication and user actions.

📌 Endpoints:
Endpoint Method Description
http://localhost:8000/routes/signup_user.php   POST  Register a new user
http://localhost:8000/routes/login_user.php    POST  Authenticate a user
http://localhost:8000/routes/logout_user.php   POST  Destroy user session

✅ Features
Input validation

Session management using PHP

Proper HTTP status codes

Secure login/logout flows

📁 Sample usage provided in the React frontend (/Client/oca-client) using fetch() POST requests.

3. 🗺️ Interactive Map with jVectorMap
   Interactive map of Pakistan:

Highlights provinces on mouseover

Allows zooming into specific regions

Alert displays province name on click

Each province styled with a unique color

📁 Implemented in React under /Client/oca-client/src/components/PakMap

⚙️ Tech Stack
Frontend React.js
Backend PHP (Custom MVC)
Database MySQL (PDO used for access)
Mapping jVectorMap

🚀 Getting Started
🔧 Backend Setup (PHP + MySQL)
cd Server
php -S localhost:8000
⚠️ Ensure your database credentials are correct in includes/dbHandler.php

🌐 Frontend Setup (React)
cd Client/oca-client
npm install --f
npm start
👨‍💻 How to Use
Guest Login: Click the "Guest Log In" button to access the dashboard without auth.

Sign Up: Register with your name, email, and password.

Log In: Access the app with your credentials.

Log Out: End your session securely.

🧠 Notes
PHP sessions manage authentication states.

Protected routes are restricted for unauthenticated users.

Guest users can skip login to explore the map directly.

All API requests use JSON POST format.

📁 Folder Structure

/Client
└── oca-client # React frontend

/Server
├── controllers # PHP controllers
├── models # PHP models
├── routes # Endpoint routes
├── includes # DB connection, session config
└── utils # Generic Methods or function (As of now empty)
