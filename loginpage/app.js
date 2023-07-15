const express = require('express')
const collection = require("./mongo")
const cors = require("cors")
const { connect } = require('mongoose')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(function( req, res, next) {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers','Origin,X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Credentials',true);
    
  });
app.get("/", cors(), (req,res)=>{

})

app.post("/", async (req,res)=>{
    const {email,password} =req.body

    try {
        const check = await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("NotExist")
        }
    } catch (e){
        res.json("NotExits")
        
    }
})

app.post("/signin", async (req,res)=>{
    const {email,password,name,dob} =req.body

    const data ={
        email:email,
        password:password,
        name:name,
        dob:dob
    }

    try {
        const check =await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }
    } catch (e){
        res.json("notexist")
        
    }
})
app.listen(8000,()=>{
    console.log("Port is connect");
})