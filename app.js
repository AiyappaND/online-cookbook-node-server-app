import express from 'express'
import session from "express-session";
import cors from 'cors'
import mongoose from "mongoose";

import RecipeController from "./controllers/recipe-controller.js";
import AuthController from "./controllers/auth-controller.js";

// const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
//     || "mongodb://127.0.0.1:27017/online_cookbook"

const CONNECTION_STRING = "mongodb+srv://anil:tEKWI0qO8q8Wxsq1@cluster0.s4yb1xe.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(CONNECTION_STRING);

const app = express()

app.use(
    session({
        secret: "any string",
        resave: false,
        saveUninitialized: true,
    })
);
app.use(express.json());
app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000",
    })
);

RecipeController(app);
AuthController(app);

app.listen(process.env.PORT || 4000);
