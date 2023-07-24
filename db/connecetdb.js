import {  mongoose } from "mongoose";
const connectDB = async (DATABASE_URL)=>{
    try{
        const DB_OPIONS ={
            dbName :"school",
        }
        await mongoose.connect(DATABASE_URL,DB_OPIONS);
        console.log("connect mongoose successfully......")
    } catch(err){
        console.log(err);
    }
}

export default connectDB;