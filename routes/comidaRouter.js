const express = require("express");
const Router = express.Router()

Router.get("/menu",(req,res)=>{
    return res.json({"mensaje":"Hola desde el menu"})
})

module.exports=Router
