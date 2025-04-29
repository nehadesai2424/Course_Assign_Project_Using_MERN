# 📚 Course Assigning Project

A **MERN Stack** web application for managing students and assigning courses.  
Built with **React (Vite)**, **Node.js**, **Express**, and **MongoDB**.

---

##  Features
-  Add, edit, and delete students, courses, and assigned courses.
-  Assign multiple courses to students.
-  View assigned courses with populated student and course details.
-  Fast and modern UI with Vite + React.
-  RESTful API with Express & MongoDB.
-  Secure and efficient backend.

---

##  Tech Stack
- **Frontend:** React (Vite), Bootstrap
- **Backend:** Node.js, Express.js, MongoDB
- **State Management:** React Hooks
- **Package Manager:** npm / yarn

---

## 📂 Project Structure

```
Course_Assign_Project_Using_MERN/
|
|├── frontend/         # Vite React Frontend
|   |├── src/
|   |├── public/
|   |├── package.json
|   └── vite.config.js
|
|├── backend/          # Express Backend
|   |├── models/       # MongoDB Models
|   |├── routes/       # API Routes
|   |├── index.js      # Entry Point
|   └── package.json
|
|├── .gitignore
└── README.md
```

---

##  Installation & Setup

1️⃣ Clone the Repository
```bash
git clone https://github.com/nehadesai2424/Course_Assign_Project_Using_MERN.git
cd Course_Assign_Project_Using_MERN
```

2️⃣ Backend Setup
```bash
cd backend
npm install
npm start
```

3️⃣ Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```

---

##  Usage

- Open your browser and go to: [http://localhost:5173](http://localhost:5173)
- Add students and courses.
- Assign courses to students.
- View assigned courses with student and course details populated.

---

##  API Endpoints

### Student Routes

| Method | Endpoint           | Description          |
| :----- | :----------------- | :------------------- |
| GET    | `/api/student`     | Get all students      |
| POST   | `/api/student`     | Add a new student     |
| PUT    | `/api/student/:id` | Update a student      |
| DELETE | `/api/student/:id` | Delete a student      |

### Course Routes

| Method | Endpoint           | Description          |
| :----- | :----------------- | :------------------- |
| GET    | `/api/course`      | Get all courses       |
| POST   | `/api/course`      | Add a new course      |
| PUT    | `/api/course/:id`  | Update a course       |
| DELETE | `/api/course/:id`  | Delete a course       |

### Assigned Course Routes

| Method | Endpoint                   | Description                       |
| :----- | :------------------------- | :-------------------------------- |
| GET    | `/api/assign-course`       | Get all assigned courses (with student & course details) |
| POST   | `/api/assign-course`       | Assign a course to a student     |
| DELETE | `/api/assign-course/:id`   | Remove an assigned course        |


---

✅ **Happy Coding!**


