const productModel=require("../model/product.model")

const productRoute=async(req,res)=>{

try {
    const newProduct = new productModel({
      Makeup: req.body.Makeup,
      SkinCare: req.body.SkinCare,
      Shampoo:req.body.Shampoo,
      SanitizingCare:req.body.SanitizingCare,
      CollectionProducts:req.body.CollectionProducts
  
    });
    const product = await newProduct.save();
    console.log(product.Makeup + ' saved to makeupAndCollectionsProduct collection.');
    return res.status(201).send({ message: 'Product successfully created', product} );
  } catch (err) {
    console.error(err);
    return res.status(500).send({ error: 'Internal server error' });
  }


}


module.exports={productRoute}