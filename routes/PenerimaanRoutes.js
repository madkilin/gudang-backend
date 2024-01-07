import express from "express";
import {
  createPenerimaan,
  deletePenerimaan,
  getPenerimaan,
  getPenerimaanById,
  getPenerimaanByIdLaporan,
  updatePenerimaan,
} from "../controller/PenerimaanController.js";

const router = express.Router();

router.get("/Penerimaan", getPenerimaan);
router.get("/LaporanPenerimaan/:id", getPenerimaanByIdLaporan);
router.get("/Penerimaan/:id", getPenerimaanById);
router.post("/Penerimaan", createPenerimaan);
router.patch("/Penerimaan/:id", updatePenerimaan);
router.delete("/Penerimaan/:id", deletePenerimaan);

export default router;
