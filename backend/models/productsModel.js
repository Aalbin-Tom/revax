import  mongoose from "mongoose"

const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique:true,
        },
        price: {
            type: Number,
            required: true,
        },
        quantity: {
            type: Number,
            required: true
        },
    },
    {
        timestamps: false,
    }
);
const Product = mongoose.model("Prducts", ProductSchema);
export default  Product;