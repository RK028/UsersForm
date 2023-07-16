const express = require('express')
const http = require('http')
const collection = require("./mongo")
const cors = require("cors")
const { connect } = require('mongoose')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
// app.use(function( req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin','*');
//     res.setHeader('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers','Origin,X-Requested-With, Content-Type, Accept');
//     res.setHeader('Access-Control-Allow-Credentials',true);
    
//   });
app.get("/getUsers",async (req,res)=>{
    try {
        const check =await collection.find({})
        console.log(check)

        if(check.length==0){
            res.json({ status:false, data:"No users found"})
        }
        else{
            
            res.json({ status:true,data:check})
        }
    } catch (e){
        console.log(e);
        res.json({ status:false,data:e})
        
    }

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
            dateofbirth:new Date(dob)
        }
           
        try {
            const check =await collection.findOne({email:email})
            console.log(check)
    
            if(check){
                res.json({ status:false, data:"exist"})
            }
            else{
                
                const response = await collection.create(data)
                console.log(response)
                res.json({ status:true,data:response})
            }
        } catch (e){
            res.json({ status:false,data:e})
            
        }
    })
    app.post("/login", async (req,res)=>{
        const {email,password} =req.body
    
        const data ={
            email:email,
            password:password
            
        }
           
        try {
            const check =await collection.findOne(data)
            console.log(check)
    
            if(check){
                res.json({ status:true, data:check})
            }
            else{
                res.json({ status:false,data:"No user found"})
            }
        } catch (e){
            res.json({ status:false,data:e})
            
        }
    })
    app.post("/update", async (req,res)=>{
        const {email,password,name,dob} =req.body
        console.log(req.body._id.id);
    
        const data ={
            email:email,
            password:password,
            name:name,
            dateofbirth:new Date(dob)
        }
           
        try {
            const check =await collection.findOneAndUpdate({_id:req.body._id.id},{$set:data})
            console.log(check)
    
            if(check){
                res.json({ status:true, data:check})
            }
            else{
                res.json({ status:false,data:"ok"})
            }
        } catch (e){
            console.log(e)
            res.json({ status:false,data:e})
            
            
        }
    })
    app.post("/delete", async (req,res)=>{
           
        try {
            const check =await collection.findOneAndDelete({_id:req.body._id})
            console.log(check)
    
            if(check){
                res.json({ status:true, data:check})
            }
            else{
                res.json({ status:false,data:"ok"})
            }
        } catch (e){
            console.log(e)
            res.json({ status:false,data:e})
            
            
        }
    })
app.listen(8000,()=>{
    console.log("Port is connect");
})