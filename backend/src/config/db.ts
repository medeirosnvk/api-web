import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  charset: process.env.DB_CHARSET,
  connectionLimit: 10,
  connectTimeout: 3600000,
});

export async function executeQuery(
  query: string,
  params?: any[]
): Promise<any> {
  try {
    const [rows, fields] = await pool.execute(query, params);
    return rows;
  } catch (error) {
    console.error("Erro ao executar consulta:", error);
    throw error;
  }
}
