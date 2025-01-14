import { Request, Response } from "express";
import { getCustomers } from "../services/customerService";

export async function getAllCustomers(req: Request, res: Response) {
  try {
    const customers = await getCustomers();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve customers" });
  }
}
