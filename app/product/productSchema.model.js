
var mongoose = require('mongoose');
var productSchema = new mongoose.Schema({
  ProductName: {type:String,unique:true},
  ConsumerName:  {type:String},
  completed: Boolean,
  note: String,
  created_Date: { type: Date, default: Date.now },
});
module.exports = mongoose.model('products', productSchema);

