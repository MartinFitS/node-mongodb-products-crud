import Product from "../models/Products" ;
import Products from "../models/Products";

export const renderProducts = async (req , res)=>{

    const products = await Product.find().lean();

    res.render("index", {products: products});
}

export const createProduct = async (req,res)=>{
    try{
     const product = Product(req.body);
     
     await product.save();
 
     res.redirect("/");
    }catch(e){
     console.error(e);
    }
}

export const renderProductEdit = async (req,res)=>{
    try{
        const product = await Products.findById(req.params.id).lean();
    
        res.render("edit", {product});
    }catch(e){
        console.error(e);
    }
}

export const editProduct = async (req,res)=>{
    const {id} = req.params;

    await Products.findByIdAndUpdate(id, req.body)

    res.redirect("/")
}

export const deleteProduct = async(req,res)=>{
    const {id} = req.params;

    await Product.findByIdAndDelete(id);

    res.redirect("/");
}