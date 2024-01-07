import express from "express";
import cors from "cors";
import UserRoutes from "./routes/UserRoutes.js";
import BarangRoutes from "./routes/BarangRoutes.js";
import PemasokRoutes from "./routes/PemasokRoutes.js";
import PenerimaanRoutes from "./routes/PenerimaanRoutes.js";
import PengeluaranRoutes from "./routes/PengeluaranRoutes.js";
import LaporanRoutes from "./routes/LaporanRoutes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(UserRoutes);
app.use(BarangRoutes);
app.use(PemasokRoutes);
app.use(LaporanRoutes);
app.use(PengeluaranRoutes);
app.use(PenerimaanRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Listening on port " + port);
});
