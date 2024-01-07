import express from "express";
import {
  createPemasok,
  deletePemasok,
  getPemasok,
  getPemasokById,
  updatePemasok,
} from "../controller/pemasokController.js";

const router = express.Router();

router.get("/Pemasok", getPemasok);
router.get("/Pemasok/:id", getPemasokById);
router.post("/Pemasok", createPemasok);
router.patch("/Pemasok/:id", updatePemasok);
router.delete("/Pemasok/:id", deletePemasok);

export default router;
