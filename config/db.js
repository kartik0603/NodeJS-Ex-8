const mongoose=require('mongoose');

const connectDB=async()=>{
    await mongoose.connect("mongodb://localhost:27017/coffee")
}
module.exports=connectDB