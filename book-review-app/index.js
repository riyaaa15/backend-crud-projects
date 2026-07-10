const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Book = require("./models/book.js");
const methodOverride = require("method-override");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

main()
 .then(() => {
    console.log("connection sucessful");
 })
 .catch(err => console.log(err));

async function main() {
    await mongoose.connect ('mongodb://127.0.0.1:27017/Library');
};

//index route 
app.get("/books", async (req, res) => {
    let book = await Book.find();
    res.render("index.ejs", { book });
});

app.get("/books/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/books", (req, res) => {
    let { title, author, genre, rating } = req.body;
    let newbook = new Book({
        title: title,
        author: author,
        genre: genre,
        rating: rating,
    });

    newbook
     .save()
     .then(() => {
        res.redirect("/books");
     })
     .catch((err) => {
        console.log(err);
     })
});

app.delete("/books/:id", async(req, res) => {
    let {id} = req.params;
    let deleteBook = await Book.findByIdAndDelete(id);
    res.redirect("/books");
});

app.get("/", (req, res) => {
    console.log("root is working");
});

app.listen(8080, () => {
    console.log("server is listening on port 8080");
});