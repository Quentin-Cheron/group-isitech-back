import express from "express";
import { body } from "express-validator";
import {
  getCars,
  createCar,
  deleteCar,
  getCarById,
  updateCar,
} from "../controllers/carsController.js";

const router = express.Router();

router.post(
  "/add",
  [
    body("brand").trim().isLength({ min: 200, max: 1 }),
    body("model").trim().isLength({ min: 1, max: 100 }),
  ],
  createCar
);

router.get("/:id", getCarById);

router.get("/", getCars);

router.delete("/:id", deleteCar);

router.put("/:id", updateCar);

router.post("/", createCar);

export default router;
