import express from "express";
import employees from "./db/employees.js";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello employees!");
});

app.get("/employees", (req, res) => {
  res.status(200).json(employees);
});

app.get("/employees/random", (req, res) => {
  const employee1 = Math.floor(Math.random() * employees.length);
  res.status(200).json(employees[employee1]);
});

app.get("/employees/:id", (req, res) => {
  const id = Number(req.params.id);
  const selectedEmployee = employees.find((employee) => employee.id === id);

  if (selectedEmployee) {
    res.status(200).json(selectedEmployee);
  } else {
    res.status(404).json({ error: "Employee not found" });
  }
});

export default app;
