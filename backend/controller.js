const getProducts = async(req, res, next) => {
    const products = await Product.find().exec();

    res.status(200).json({products})
}
