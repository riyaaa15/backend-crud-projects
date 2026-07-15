const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

main()
 .then(() => {
    console.log("conection sucessful");
})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect ('mongodb://127.0.0.1:27017/whatsapp');
}

function wrapAsync(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch((err) =>  next(err));
    };
}
//Index Route
app.get("/chats", wrapAsync(async (req, res) => {
   let chats = await Chat.find();
   res.render("index.ejs", { chats });
}));

//New Route  
app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
});

//Create  Route
app.post("/chats", wrapAsync(async (req, res, next) => {
    let {from, to, msg} = req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date()
});
    
    await newChat.save();
    res.redirect("/chats");
}));

//Edit Route
app.get("/chats/:id/edit", wrapAsync(async (req, res) => {
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
}));

//Update Route
app.put("/chats/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    let {newMsg} = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(
        id, 
        { msg: newMsg }, 
        { runValidators: true, new: true }
    );
    
    console.log(updatedChat);
    res.redirect("/chats");
}));

//Destroy Route
app.delete("/chats/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
}));

app.get("/", (req, res) => {
    res.send("root is working");
});

const handleValidationErr = (err) => {
    console.log("This was a Validation error. Please follow rules");
    console.dir(err.message);
    return err;
}

app.use((err, req, res, next) => {
    console.log(err.name);
    if(err.name === "ValidationError") {
        err = handleValidaitonErr(err);
    }
    next(err);
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    let {status = 500, message = "SOME ERROR"} = err;
    res.status(status).send(message);
});


app.listen(8080, () => {
    console.log("server is listening on port 8080");
});

