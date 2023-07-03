const mongoose = require('mongoose');
const canteenmenu = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  id: String
});


const Menu = mongoose.model('Menu', canteenmenu);
module.exports = Menu;



//  module.exports={
//     name: String,
//     price: Number,
//     description: String,
//     id:String 
//  };
// export default canteenmenu;
