import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
name :{type:String,required:true,trim:true},
age  :{type:Number,required:true,min:18,max:60},
fees : {type:mongoose.Decimal128,required:true,validate:(v)=>{
    v >= 2000
}}
})

 const studentModel = mongoose.model(("student"),studentSchema)

 export default studentModel;   