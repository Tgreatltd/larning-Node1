let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let schema =new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true,index:true},
    password:{type:String,required:true},
    timestamps:{type:Date, createAt:'created_at',updatedAt:'updated_at'}

});

module.exports=mongoose.model('users', schema);