import express from "express";
import { getAllCustomers } from "../controllers/customerController";

const customerRoutes = express.Router();

customerRoutes.post("/customers", async (req, res) => {
  try {
    const response = await postCustomer(req, res);
    res.status(201).json(response);
  } catch (error) {
    console.error("Error retrieving customers:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

customerRoutes.get("/customers", async (req, res) => {
  try {
    const response = await getAllCustomers(req, res);
    res.status(200).json(response);
  } catch (error) {
    console.error("Error retrieving customers:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default customerRoutes;
