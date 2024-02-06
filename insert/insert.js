/*//import module
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
    let obj={
        "p_id":req.body.p_id,
        "p_name":req.body.p_name,
        "p_cost":req.body.p_cost
    }
    //connecting mcl
    mcl.connect(url,(err,conn)=>{
        if(err){
            res.send({ 'insert': 'error' })
        }
        else{
            let db=conn.db('nodedb')
            db.collection("products").insertOne(obj,(err)=>{
                if(err){
                    res.send({'insert':'error'})
                }
                else{
                    console.log('data inserted')
                    res.send({'insert':"success"})
                    conn.close()
                }
            })
        }
    })
})


//export router
module.exports=router*/




const express = require('express')
let mongodb = require('mongodb')
//import url
let url = require('../url')
//create mongoclient
let mcl = mongodb.MongoClient
//create router instance
let router = express.Router()
//create rest api
router.post("/", (req, res) => {
    let obj = {
        "p_id": req.body.p_id,
        "p_name": req.body.p_name,
        "p_cost": req.body.p_cost
    }
    //connect to mongodb
    mcl.connect(url, (err, conn) => {
        if (err)
            console.log('Error in connection')
        else {
            let db = conn.db('nodedb')
            db.collection('products').insertOne(obj, (err) => {
                if (err)
                    res.send({ 'insert': 'error' })
                else {
                    console.log("Data inserted")
                    res.json({ 'insert': 'success' })
                    conn.close()
                }
            })
        }
    })
})
//export router
module.exports = router
