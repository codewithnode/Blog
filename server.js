const express = require('express');
const app = express();
const mongoose = require('mongoose');

const articleRoutes = require('./routes/articles');
app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost:27017/mdblog", { useNewUrlParser: true, useUnifiedTopology: true });
let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/articles", articleRoutes);

app.listen(3000, () => {
    console.log("started listening");
})