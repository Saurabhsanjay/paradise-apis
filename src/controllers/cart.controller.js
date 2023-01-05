const CartModel =require("../model/cart.model");


const addProduct=async(req,res)=>{
    try {
       const {id,title,image,price,description,qty,user}=req.body;
       const product=new CartModel({
        price,title,image,description,qty,user
       })
       if(title){
        return res.status(404).send({ErrorMessage:"Items Already Added In Cart"})
       }
       await product.save();
       res.status(201).send({product})


    } catch (error) {
    return res.status(500).send({error:"internal server Error",error})
    }
}

const getAllCartProducts = async (req, res) => {
    try {
      const products = await CartModel.find();
      return res.status(200).send({ message:"fetched successfully",products });
    } catch (err) {
      console.error(err);
      return res.status(500).send({ error: 'Internal server error',err });
    }
  };
  const DeleteCartProduct = async (req, res) => {
    try {
      const productid = await CartModel.findByIdAndDelete(req.params.id);
      if(!productid){
        return res.status(404).send({error:"product not found"})
      }
      return res.status(200).send({ message:"Deleted successfully",productid });
    } catch (err) {
      console.error(err);
      return res.status(500).send({ error: 'Internal server error',err });
    }
  };
  const updateCartProduct = async (req, res) => {
    try {
      const productid = await CartModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
      if(!productid){
        return res.status(404).send({error:"product not found"})
      }
      return res.status(200).send({ message:"Updated successfully",productid });
    } catch (err) {
      console.error(err);
      return res.status(500).send({ error: 'Internal server error',err });
    }
  };

module.exports={getAllCartProducts,addProduct,DeleteCartProduct,updateCartProduct}