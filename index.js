
const express = require("express")
const { default: mongoose } = require("mongoose")
const app = express()
const cors = require("cors")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("./models/user")
const EmployeeRouter = require("./routes/dashboard.routes")
app.use(express.json())
require("dotenv").config();

const KEY = process.env.SECRET_KEY

app.use(cors({
    origin : "*"
}))

async function main(){
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("mongodb connected successfully!");
    } catch (error) {
        console.log("mongodb connection failed!");
    }
}
main()

app.post("/signup",async(req,res)=>{
    // console.log("hello");
    try {
        const {email,password} = req.body
        const user_exist = await User.findOne({email})
        if(user_exist){
            return res.send({msg:"user exist!"})
        }
        bcrypt.hash(password,4,async(err,hash)=>{
            await User.create({email,password:hash})
            return res.send({msg:"signup successfull!"})
        })
        
    } catch (error) {
        res.send({error,msg:"signup failed"})
    }
})

app.post("/login",async(req,res)=>{
    try {
        const {email,password} = req.body
        const user = await User.findOne({email})
        if(!user){
            return res.send({msg:"user not exist!"})
        }
        const hash_password = user?.password
        bcrypt.compare(password,hash_password,async(err,result)=>{
            if(err) throw err;
            else if(result){
                const token = jwt.sign({userId:user._id},KEY)
                res.send({msg:"Login successfull!",token:token})
            }else{
                res.send({msg:"Password not match"})
            }
        })

    } catch (error) {
       res.send({msg:error})
    }
})


app.get("/",(req,res)=>{
    res.send("base endpoint running")
})
app.use("/employee",EmployeeRouter)


app.listen(8000,()=>{
    console.log("port running on 8000!");
})