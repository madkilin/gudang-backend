import express from "express";
import {
  createBarang,
  deleteBarang,
  getBarang,
  getBarangById,
  getBarangByKode,
  updateBarang,
} from "../controller/barangController.js";

const router = express.Router();

router.get("/Barang", getBarang);
router.get("/Barang/:id", getBarangById);
router.get("/BarangKode/:id", getBarangByKode);
router.post("/Barang", createBarang);
router.patch("/Barang/:id", updateBarang);
router.delete("/Barang/:id", deleteBarang);

export default router;
