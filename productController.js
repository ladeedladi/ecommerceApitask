



const createProduct=async(req,res)=>{
    //you can add the product details as you want
    const {productName,price,category}=req.body
    //db code to store product 
}

const updateProduct=async(req,res)=>{
    //you can add the product details as you want
    const {productName,price,category}=req.body
    //db code to store product 
}


const deleteProduct=async(req,res)=>{
    const {productId}=req.body
}


const getProduct=async(req,res)=>{
    console.log(req.params.productId);
    //productId come from req.params.productId
    //api url will be like http://localhost:3000/getProduct/23432423

}


const getCategories=async(req,res)=>{
const {category}=req.body
//db code to fetch all product belong to this category the category can be subcategory too

}

const getProducts=async(req,res)=>{
    //fetch all the products according to a filter  like alphabetic or price 
}


module.exports={
    createProduct,
    updateProduct,
    deleteProduct,
    getProduct,
    getCategories,
    getProducts
}