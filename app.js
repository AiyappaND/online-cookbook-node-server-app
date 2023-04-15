import express from 'express'
import cors from 'cors'
import mongoose from "mongoose";

import RecipeController from "./controllers/recipe-controller.js";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || "mongodb://127.0.0.1:27017/online_cookbook"

mongoose.connect(CONNECTION_STRING);

const app = express()
app.use(cors())
app.use(express.json());

RecipeController(app);

app.listen(process.env.PORT || 4000);
