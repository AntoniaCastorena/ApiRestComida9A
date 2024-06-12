const express = require("express")

const app = express()

const port = 3500

app.get("/", (req,res)=>{
    res.json({mensaje:"Aplicación funcionando correctamente"})
})

app.listen(port, ()=>{
    console.log(`Aplicación corriendo en el puerto: ${port}`)
})