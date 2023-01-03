

const express=require("express")
const mongoose=require('mongoose')
const connect=require('./src/Configs/db')
const authMiddleware =require("./src/middleware/authMiddleware")
const cors=require('cors')


const authRoute=require('./src/routes/auth')
const productRoute=require('./src/routes/auth')
const { getAllProducts, getProductById } = require("./src/controllers/product.controller")
const {  getAllUsers, getUserByID } = require("./src/controllers/user.controller")

mongoose.set('strictQuery', true);
const PORT = 8080

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
 app.use(cors());
 
app.use("/auth",authRoute)
app.use("/auth",productRoute)
app.use("/auth",getAllProducts)
app.use("/auth",getProductById)
app.use("/",getAllUsers)
app.use("/", getUserByID);


app.get("/", (req, res) => {
  res.send("Hello!");
});

app.listen(PORT, async () => {
 const connection= await connect();
 if(connection){
  console.log("MONGODB Connected")
 }
  console.log(`Server listening on http://localhost:${PORT}`);
});
