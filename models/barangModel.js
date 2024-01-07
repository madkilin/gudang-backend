import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const ModelBarang = db.define(
  "barang",
  {
    kodebarang: DataTypes.STRING,
    namabarang: DataTypes.STRING,
    kategori: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    stok: DataTypes.INTEGER
  },
  {
    freezeTableName: true,
  }
);

export default ModelBarang;

(async () => {
  await db.sync();
})();
