import express from "express";
import cors from "cors";
import UserRoutes from "./routes/UserRoutes.js";
import BarangRoutes from "./routes/BarangRoutes.js";
import PemasokRoutes from "./routes/PemasokRoutes.js";
import PenerimaanRoutes from "./routes/PenerimaanRoutes.js";
import PengeluaranRoutes from "./routes/PengeluaranRoutes.js";
import LaporanRoutes from "./routes/LaporanRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(UserRoutes);
app.use(BarangRoutes);
app.use(PemasokRoutes);
app.use(LaporanRoutes);
app.use(PengeluaranRoutes);
app.use(PenerimaanRoutes);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});