 let mongoose=require("mongoose");
 const bookSchema= mongoose.Schema({
    title:String,
    author:String,
    year:Number,
    pages:Number,
    publisher:String,
    language:String
})

const Book=mongoose.model("Book",bookSchema)
module.exports=Book;