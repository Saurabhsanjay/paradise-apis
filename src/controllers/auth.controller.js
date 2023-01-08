const jwt=require("jsonwebtoken");
require('dotenv').config()
const bcrypt=require("bcrypt");
const UserModel=require('../model/user.model')

const signin=async(req,res)=>{
    const {name,email,password}=req.body;


const user =await UserModel.findOne({email});
    if(user){
        return res.status(400).send('user already exists');
    }

    bcrypt.hash(password,10,async(err,hash)=>{
        if(err){
            return res.status(500).send({error:"internal server error"})
        }
        try{
           const newUser=await UserModel.create({name,email,password:hash});
            return res.status(201).send({user:newUser});
        }catch(err){
            return res.status(500).send({error: "Internal server error"})
        }
    })
}

const login = async(req,res) => {
    const {email, password} = req.body;
  
    // Find the user with the given email
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }
  
    // Compare the passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send({ error: "Invalid credentials" });
    }
  
    // Sign the JWT
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "5h",
    });

    // const token = jwt.sign(data, jwtSecretKey, { expiresIn: "1d" });
  
    // Send the JWT and the user's name in the response
    return res.status(200).send({id:user._id, token, name: user.name, email });
  }
  

module.exports={signin, login};