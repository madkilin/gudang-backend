import express from "express";
import {
  createUsers,
  deleteUsers,
  getUsers,
  getUsersById,
  updateUsers,
  login,
} from "../controller/userController.js";

const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getUsersById);
router.post("/users", createUsers);
router.patch("/users/:id", updateUsers);
router.delete("/users/:id", deleteUsers);
router.post("/login", login);

export default router;
