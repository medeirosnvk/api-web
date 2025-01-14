import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";

import customerRoutes from "./routes/customerRoutes";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use(customerRoutes);

app.listen(port, () => {
  console.log(`Servidor iniciado em http://localhost:${port}`);
});
