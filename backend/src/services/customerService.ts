import { executeQuery } from "../config/db";

export async function getCustomers() {
  return executeQuery(`SELECT * FROM customers`);
}

export async function postCustomer(request: Request) {
  return executeQuery(
    `INSERT INTO 
    customers(
      name, 
      email, 
      phone, 
      addres, 
      city, 
      state, 
      zip)
    VALUES(
      ${request.name},
    )`
  );
}
