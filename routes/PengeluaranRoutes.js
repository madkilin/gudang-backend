import express from "express";
import {
  createPengeluaran,
  deletePengeluaran,
  getPengeluaran,
  getPengeluaranById,
  getPengeluaranByIdLaporan,
  updatePengeluaran,
} from "../controller/PengeluaranController.js";

const router = express.Router();

router.get("/Pengeluaran", getPengeluaran);
router.get("/Pengeluaran/:id", getPengeluaranById);
router.get("/LaporanPengeluaran/:id", getPengeluaranByIdLaporan);
router.post("/Pengeluaran", createPengeluaran);
router.patch("/Pengeluaran/:id", updatePengeluaran);
router.delete("/Pengeluaran/:id", deletePengeluaran);

export default router;
