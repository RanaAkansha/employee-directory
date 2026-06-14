const express = require("express")
const app = express();
app.use(express.json());
let employees = [ {id:1, name: "Akansha", department:"cs"}];

app.get("/employees", (req,res) => { res.json(employees);});
app.get("/employees/:id", (req,res) = > {const employee = employee.find(e => e.id == req.params.id);

if (!employee) {
  return res.status(404).json({messgae:"Not Found"});
  res.json(employee);

app.post("employees", (req,res) => 
