import express from "express";
import { connectDB } from "./db.js";
import routes from "./routes.js"
import session from "express-session"

const app =express()

connectDB()
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'yoursecretkey',
    resave: false,
    saveUninitialized: true,
}));

app.use('/', routes)

const PORT = 5000;
app.listen(PORT, () => console.log('http://localhost:5000 '));