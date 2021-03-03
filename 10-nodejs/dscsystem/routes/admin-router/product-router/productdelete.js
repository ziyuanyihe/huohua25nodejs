const Product = require('../../../db/productschma');
module.exports = async(req, res) => {
    let result = await Product.findOneAndDelete({ "_id": req.query.id })
    if (result) {
        res.redirect("/admin/productlist")
    }
}