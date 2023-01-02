const express=require('express')
const Router=express.Router();
const {signin,login}=require("../controllers/auth.controller")

const{productRoute,getAllProducts,getProductById}=require("../controllers/product.controller")

Router.use("/signin",signin);
Router.use("/login",login);
Router.use("/products",productRoute)
Router.get("/products/getall",getAllProducts)
Router.get("/products/:id",getProductById)

module.exports=Router;