//import module
let express=require('express')
let mongodb=require('mongodb')
//import url
let url=require('../url')
//create mongoclient
let mcl=mongodb.MongoClient
//creating rourter instance
let router=express.Router()
//creating rest api
router.get('/',(req,res)=>{
    //conecting mcl
    mcl.connect(url,(err,conn)=>{
        if(err){
            console.log("err in connection: ",err)
        }
        else{
            let db=conn.db('nodedb')
            db.collection("products").find().toArray((err,array)=>{
                 if(err){
                    console.log("err", err)
                 }
                 else{
                    console.log('data sent')
                    res.send(array)
                    conn.close()
                 }
            })
        }
    })
})
module.exports=router