
const express = require("express")
const Employee = require("../models/dashboard")
const EmployeeRouter = express.Router()

EmployeeRouter.get("/dashboard",async(req,res)=>{
    try {
        const data = await Employee.find()
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})

module.exports = EmployeeRouter