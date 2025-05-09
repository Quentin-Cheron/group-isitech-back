import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// body parser

app.use(bodyParser.json());

app.use(express.json());

// cors

app.use(cors());

// database connection
import "./config/database.js";

const PORT = process.env.PORT || 7000;

// Route for car

import carRoute from "./routes/route.js";

app.use("/cars", carRoute);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
