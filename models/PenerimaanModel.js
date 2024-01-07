import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Penerimaan = db.define(
  "penerimaan",
  {
    Idlaporan: DataTypes.STRING,
    JenisPenerimaan: DataTypes.STRING,
    IdPemasok: DataTypes.STRING,
    Nama: DataTypes.STRING,
    Perusahaan: DataTypes.STRING,
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

export default Penerimaan;

(async () => {
  await db.sync();
})();
