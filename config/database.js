import mongoose from "mongoose";
let url = process.env.URI_MONGO

console.log(url)

mongoose.connect(url)
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log("Error connecting to MongoDB", err));
