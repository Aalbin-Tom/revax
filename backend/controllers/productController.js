import Products from "../models/productsModel.js"

export const addproducts = async (req, res) => {
    const { name, price, quantity } = req.body
    console.log(name, price, quantity);
    try {
        const productExists = await Products.findOne({ name })

        if (productExists) {
            res.status(400).json({ message: "The product alteady exist" });
        } else {
            const newProduct = await Products.create({
                name, price, quantity
            });
            if (newProduct) {

                res.json({
                    _id: newProduct._id,
                    name: newProduct.name,
                    price: newProduct.price,
                    quantiyt: newProduct.quantity,
                })
            }
        }
    }
    catch (error) {
        console.log(error)
    }
}


export const getAllproducts = async (req, res) => {
    try {
        const products = await Products.find({})
        console.log(products);
        if (products) {
            res.status(200).json({
                _id: products._id,
                name: products.name,
                price: products.price,
                quantiyt: products.quantity,
            })
        } else {
            res.status(400).json({ message: "No Products added , Pleaze Add products" });
        }
    }
    catch (error) {
        console.log(error)
    }
}