import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const ModelLaporan = db.define(
  "laporan",
  {
    JenisLaporan: DataTypes.STRING,
    Jenis: DataTypes.STRING,
    Nama: DataTypes.STRING,
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

export default ModelLaporan;

(async () => {
  await db.sync();
})();
