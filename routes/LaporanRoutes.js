import express from "express";
import {
  createLaporan,
  deleteLaporan,
  getLaporan,
  getLaporanById,
  updateLaporan,
} from "../controller/LaporanController.js";

const router = express.Router();

router.get("/Laporan", getLaporan);
router.get("/Laporan/:id", getLaporanById);
router.post("/Laporan", createLaporan);
router.patch("/Laporan/:id", updateLaporan);
router.delete("/Laporan/:id", deleteLaporan);

export default router;
