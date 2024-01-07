import { Sequelize } from "sequelize";

const db = new Sequelize("db_gudang", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

export default db;