import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Pemasok = db.define(
  "pemasok",
  {
    name: DataTypes.STRING,
    number: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
    perusahaan: DataTypes.STRING,
    alamat: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Pemasok;

(async () => {
  await db.sync();
})();
