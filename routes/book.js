const express=require("express");
const router=express.Router();
const Book=require("../models/bookdb");
const books=[{
    id:1,
    title:"IronMan",
    author:"StanLee",
    year:2008,
    pages:320,
    publisher:"Marvel Comics",
    language:"WorldWide",
},
{
      id:2,
      title:"Thor",
      author:"From Holy Epics",
      year:2011,
      pages:400,
      publisher:"Marvel Comics",
      language:"World Wide"

}
]
 //Fetching all books data from server
 router.get("/",async(req,res)=>{
    const books=await Book.find();
    res.send(books);
 });
 //To Fetch the data of one book from server
 router.get("/:id",(req,res)=>{
     const id=req.params.id;
     res.send(books[id-1]);
 })
 //create API call
 router.post("",(req,res)=>{
     console.log(req.body);
     const book=req.body;
     book.id=books.length+1;
     books.push(book);
     res.send(book);
 })
 //delete API call
 router.delete("/:id",(req,res)=>{
   const id=req.params.id;
   const book=books[id-1];
   books.splice(id-1,1);
   res.send(book);
   console.log(req.body);
 });
 //Update A.P.I call
 router.put("/:id",(req,res)=>{

 })
 
module.exports=router;