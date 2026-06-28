const mongoose = require("mongoose");
const data = require("./models/data.js");

main()
 .then(() => {
    console.log("connection sucessful");
 })
 .catch(err =>  console.log(err));

 async function main() {
    await mongoose.connect ('mongodb://127.0.0.1:27017/School');
 }

 let allStudents = [
    {
        name: "Will",
        subject: "science",
        marks: 56
    },
    {
        name: "Max",
        subject: "maths",
        marks: 85
    },
    {
        name: "Eleven",
        subject: "english",
        marks: 99
    },
    {
        name: "Lucas",
        subject: "history",
        marks: 88
    },
    {
        name: "Dustin",
        subject: "hindi",
        marks: 22
    }
 ];

 data.insertMany(allStudents);