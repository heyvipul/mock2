const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
  firstName : String,
  lastName : String,
  email : String,
  salary : Number,
  date : String,
});

const Employee = mongoose.model("employee",employeeSchema)

module.exports = Employee;