const mongoose = require('mongoose');
const item = require('./restaurant');

const restaurantschema = new mongoose.Schema({
    name:{type:String, required: true},
    city:{type:String, required: true},
    item:{type:[item]}
})

const rest = mongoose.model("restaurant",restaurantschema)

module.exports=rest;