const express=require("express")
const app= express()
const mongoose =require("mongoose")
const dotenv =require("dotenv")
const cors =require("cors") 
const jwt =require("jsonwebtoken")
dotenv.config()
app.use(cors())
app.use(express.json())

const User =mongoose.model("User",new mongoose.Schema({
    email:{type:String,required:true, unique:true},
    password:{type:String,required:true}
}))
app.post("/register",async(req,res)=>{
    const {email,password} =req.body;
    try{
        const newUser =new User({email,password})
        await newUser.save()
        res.status(201).json({message:"The account been created "})
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:"The account has not been created "})
        
    }
})
app.post("/login",async(req,res)=>{
    const {email,password} =req.body;
    try{
        const user=await User.findOne({email,password})
        if(user){
            const token =jwt.sign({email:user.email},process.env.JWT_SECRET)
            res.json({message:"login in",token})
        }else{
            res.status(401).json({message:"email ou password nor corect"})
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:"The account has not been created "})
        
    }
})
const PORT = process.env.PORT || 5000
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("on conect"))
.catch((err)=>console.error("not conect",err))
app.listen(PORT,()=>console.log(`server work in this local ${PORT}`));
