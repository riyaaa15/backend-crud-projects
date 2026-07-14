# Book Review App

A full-stack CRUD application built with Node.js, Express, MongoDB, Mongoose and EJS templating to manage a personal book collection with ratings.

## Features
- View all books with title, author, genre and rating
- Add a new book
- Update rating of an existing book
- Delete a book

## Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Templating:** EJS
- **Other:** method-override

## Setup

1. Clone the repo
```bash
git clone https://github.com/riyaaa15/backend-crud-projects.git
cd book-review-app
```

2. Install dependencies
```bash
npm install
```

3. Make sure MongoDB is running locally on port 27017

4. Run the app
```bash
node index.js
```

5. Open in browser
## Routes
| Method | Route | Description |
|--------|-------|-------------|
| GET | /books | Show all books |
| GET | /books/new | Add book form |
| POST | /books | Add new book |
| GET | /books/:id/edit | Edit rating form |
| PUT | /books/:id | Update rating |
| DELETE | /books/:id | Delete book |