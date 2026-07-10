const mongoose = require("mongoose");
const book = require("./models/book.js");

main()
 .then(() => {
    console.log("connection successful");
 })
 .catch(err => console.log(err));

 async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Library');
 };
 
 let allBooks  = [
    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        genre: "Fiction",
        rating: 9
    },
    {
        title: "Atomic Habits", 
        author: "James Clear", 
        genre: "Self-Help", 
        rating: 8
    },
    {
        title: "Harry Potter", 
        author: "J.K. Rowling", 
        genre: "Fantasy", 
        rating: 10
    },
    {
        title: "The Great Gatsby", 
        author: "F. Scott Fitzgerald", 
        genre: "Classic", 
        rating: 6
    },
    {
        title: "Rich Dad Poor Dad", 
        author: "Robert Kiyosaki", 
        genre: "Finance", 
        rating: 7
    }
 ];

 book.insertMany(allBooks);