const express = require("express")
const app = express();
app.use(express.json());
let employees = [ {id:1, name: "Akansha", department:"cs"}];

app.get("/employees", (req,res) => { res.json(employees);});
app.get("/employees/:id", (req,res) = > {const employee = employee.find(e => e.id == req.params.id);

if (!employee) {
  return res.status(404).json({messgae:"Not Found"});
  res.json(employee);

app.post("employees", (req,res) =>  {const {name,department} = req.body;
if (!name|| department) {
  return res.status(400).json ({message: "invalid data"{);
}

                                     const employee = {
                                       id:Date.now(),
                                       name,department};
                                     employees.push(employee):
                                     res.status(201).json(employee):});


  app.put ("/employees/:id", (req,res) => {
    const emplooyee = employees.find(e=> e.id == req.params.id );


    if (!employee) {
      return res.status(404).json({message: "Not Found});

employee.name = req.body.naem || employee.name;
        employee.department = req.body.department || employee.departmen;

      res.json(employee);
    });

    app.delete("/employees/:id", (req,res) => {
      employees = employees.filter( e=> e.id != req.params.id);

      res.json({message: "Deleted"});
    });
  app.listen(3000);
