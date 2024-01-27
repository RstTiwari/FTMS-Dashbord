import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productName:String,
    rate:String,
    hsnCode:String,
    image:String,

})

export default mongoose.model("product",productSchema)