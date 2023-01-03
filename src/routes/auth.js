const express=require('express')
const Router=express.Router();
const {signin,login}=require("../controllers/auth.controller")

const{productRoute,getAllProducts,getProductById}=require("../controllers/product.controller");
const {  getAllUsers, getUserByID } = require('../controllers/user.controller');
Router.param("id", (req, res, next, id) => {
    req.params.id = id;
    next();
  });
Router.post("/signin",signin);
Router.post("/login",login);
Router.post("/products",productRoute)
Router.get("/getall",getAllProducts)
Router.get("/getall/:id",getProductById)
Router.get("/user",getAllUsers)
Router.get("/get/:id",getUserByID)

module.exports=Router;