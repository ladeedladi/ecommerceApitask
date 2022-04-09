const express = require('express')

const {createProduct,updateProduct,deleteProduct,getProduct,getCategories,
    getProducts}=require('./productController')
const app = express()



app.post("/createProduct",createProduct)
app.put("/updateProduct",updateProduct)
app.delete("/deleteProduct",deleteProduct)
app.get("/getProduct/:productId",getProduct)



app.post("/getCategories",getCategories)
app.post("getProducts",getProducts)
app.listen(3000,()=>{
    console.log("ruuning on post 3000");
})