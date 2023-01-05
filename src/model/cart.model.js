const mongoose= require('mongoose');
const Schema=mongoose.Schema

const CartSchema= new Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
       required:true
    },
        id: { type: Number},
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        title: { type: String, required: true },
        selection2_url: { type: String },
        description: { type: String, required: true },
        selection3_url: { type: String },
        price: { type: Number, required: true },
        selection4_url: { type: String},
        selection5: { type: String},
        selection5_url: { type: String},
    
})

const CartModel=mongoose.model("cart",CartSchema);
module.exports=CartModel;
