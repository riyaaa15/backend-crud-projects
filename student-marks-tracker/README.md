# Student Marks Tracker

A full-stack CRUD application built with Node.js, Express, MongoDB, Mongoose and EJS templating to manage student marks.

## Features
- View all students with their subject and marks
- Add a new student
- Edit existing marks
- Delete a student record

## Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Templating:** EJS
- **Other:** method-override

## Setup

1. Clone the repo
```bash
git clone https://github.com/your-username/student-marks-tracker.git
cd student-marks-tracker
```

2. Install dependencies
```bash
npm install
```

3. Make sure MongoDB is running locally on port 27017

4. Insert initial data
```bash
node init.js
```

5. Run the app
```bash
node index.js
```

6. Open in browser
    http://localhost:8080/students

## Routes
| Method | Route | Description |
|--------|-------|-------------|
| GET | /students | Show all students |
| GET | /students/new | Add student form |
| POST | /students | Add new student |
| GET | /students/:id/edit | Edit marks form |
| PUT | /students/:id | Update marks |
| DELETE | /students/:id | Delete student |