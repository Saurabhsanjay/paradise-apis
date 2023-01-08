const jwt=require('jsonwebtoken');
require('dotenv').config()
const UserModel=require("../model/user.model")
const data=async(req,res)=>{
  try{
      // const token=req.header("authorization");
      // console.log(token)
      //   const decoded=jwt.verify(token,process.env.JWT_SECRET);

        const user=await UserModel.findById(req.params.id);
        // console.log(decoded)

        if(!user){
            return res.status(404).send({error:"User not found"})
        }
        return res.status(200).send({user})

    }catch(err){
      console.log(err)
        return res.status(401).send({ error: "Invalid Response" });
    }
}

const getAllUsers = async (req, res) => {
    try {
      const user = await UserModel.find();
      return res.status(200).send({ message:"fetched successfully",user });
    } catch (err) {
      console.error(err);
      return res.status(500).send({ error: 'Internal server error' });
    }
  };

  const getUserByID=async(req,res)=>{
    try {
        const userbyid=await UserModel.findById(req.params.id);
        return res.status(200).send({"message":"userby id fetched succesfully",userbyid})
    } catch (error) {
        return res.status(500).send({error:"internal Server Error"})
    }
  }


module.exports={getAllUsers,getUserByID}