const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Data = require("./models/data.js");
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
    await mongoose.connect ('mongodb://127.0.0.1:27017/School');
};

//Index Route
app.get("/students", async (req, res) => {
    let data = await Data.find();
    res.render("index.ejs", { data });
});

// FORM new ejs
app.get("/students/new", (req, res) => {
    res.render("new.ejs");
});

//Create route 
app.post("/students", (req, res) => {
    let {name, subject, marks} = req.body;
    let newStudent = new Data({
        name: name,
        subject: subject,
        marks: marks,
});

newStudent
  .save()
  .then(() => {
    res.redirect("/students");
   })
   .catch((err) => {
     console.log(err);
   })
});

// Form for edit route
app.get("/students/:id/edit", async (req, res) => {
    let { id } = req.params;
    let student = await Data.findById(id);
    res.render("edit.ejs", { student });
});

app.put("/students/:id", async (req, res) => {
    let {id} = req.params;
    let {newMarks} = req.body;
    let updatedMarks = await Data.findByIdAndUpdate(
        id, 
        { marks: newMarks },
        { runValidators: true, new: true }
    );
    res.redirect("/students");
});

app.delete("/students/:id", async (req, res) => {
    let {id} = req.params;
    let deleteChat = await Data.findByIdAndDelete(id);
    res.redirect("/students");
});

app.get("/", (req, res) => {
    console.log("root is working");
});

app.listen(8080, () => {
    console.log("server is listening on port 8080");
});