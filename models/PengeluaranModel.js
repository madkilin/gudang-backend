import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const ModelPengeluaran = db.define(
  "pengeluaran",
  {
    Idlaporan: DataTypes.STRING,
    JenisPengeluaran: DataTypes.STRING,
    Nama: DataTypes.STRING,
    Tujuan: DataTypes.STRING,
    KodeBarang: DataTypes.STRING,
    NamaBarang: DataTypes.STRING,
    Jumlah: DataTypes.STRING,
    KondisiBarang: DataTypes.STRING,
    Keterangan: DataTypes.STRING,
    Staf: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default ModelPengeluaran;

(async () => {
  await db.sync();
})();
