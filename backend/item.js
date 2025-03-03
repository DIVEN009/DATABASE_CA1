const mongoose = require('mongoose');

const itemschema = new mongoose.Schema({
    name:{type:String, required: true},
    price:{type:Number,require: true}
})

const item = mongoose.model("rest",itemschema)

module.exports=item;