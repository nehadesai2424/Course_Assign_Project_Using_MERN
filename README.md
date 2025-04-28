# Assign Course System - MERN Project 
Welcome to the Assign Course System, a full-stack MERN application designed to efficiently manage course assignments for students. This project enables admins to assign courses, track enrollments, and streamline the learning process.

## Overview :
✅ MERN Stack (MongoDB, Express.js, React.js, Node.js) for a seamless full-stack experience.
✅ User roles: Admins and Students with different access levels.
✅ CRUD operations for managing courses, users, and assignments.
✅ React validation for secure and structured course assignments.

## Tech Stack :
✅ Frontend: React.js, React Router, Bootstrap/CSS
✅ Backend: Node.js, Express.js, MongoDB (Mongoose)
✅ API Handling: Axios for HTTP requests

## Features :
✅ Admin panel to assign courses to students
✅ CRUD operations for managing courses and users
✅ Responsive and user-friendly design

## Get Started
Check out the installation guide and setup instructions in the README to run the project locally.

#📚Course Assign Project
A MERN Stack web application for managing students and assigning courses.
Built with React (Vite), Node.js, Express, and MongoDB.

##🚀 Features
📌 Add, edit, and delete students, courses, and assigned courses.

🔗 Assign multiple courses to students.

📋 View assigned courses with populated student and course details.

🎨 Fast and modern UI with Vite + React.

🛠️ RESTful API with Express & MongoDB.

🔒 Secure and efficient backend.

##🛠️ Tech Stack
Frontend: React (Vite), Bootstrap

Backend: Node.js, Express.js, MongoDB

State Management: React Hooks

Package Manager: npm 

##📂 Project Structure

Course_Assign_Project_Using_MERN/
│
├── frontend/         # Vite React Frontend
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│
├── backend/          # Express Backend
│   ├── models/       # MongoDB Models
│   ├── routes/       # API Routes
│   ├── index.js      # Entry Point
│   ├── package.json
│
├── .gitignore
├── README.md

##🛠️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/nehadesai2424/Course_Assign_Project_Using_MERN.git
cd Course_Assign_Project_Using_MERN

2️⃣ Backend Setup
cd backend
npm install
npm start

3️⃣ Frontend Setup
cd ../frontend
npm install
npm run dev

##🚀 Usage
Open your browser and go to: http://localhost:5173

Add students and courses.

Assign courses to students.

View assigned courses with student and course details populated.

##📌 API Endpoints
Student Routes
Method	Endpoint	Description
GET	/api/students	Get all students
POST	/api/students	Add a new student
PUT	/api/students/:id	Update a student
DELETE	/api/students/:id	Delete a student

Course Routes
Method	Endpoint	Description
GET	/api/courses	Get all courses
POST	/api/courses	Add a new course
PUT	/api/courses/:id	Update a course
DELETE	/api/courses/:id	Delete a course

Assigned Course Routes
Method	Endpoint	Description
GET	/api/assignedCourses	Get all assigned courses (with student & course details)
POST	/api/assignedCourses	Assign a course to a student
DELETE	/api/assignedCourses/:id	Remove an assigned course
