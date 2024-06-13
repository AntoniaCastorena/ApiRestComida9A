const express = require("express");
const morgan = require("morgan");
const comidaRouter = require('./routes/comidaRouter')

const app = express()

const port = 3500

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(morgan('dev'))  
app.use('/API', comidaRouter)

app.use((req, res) => {
    res.status(404).json({ message: 'Ruta no encontrada' });
});


app.get("/", (req,res)=>{
    res.json({mensaje:"Aplicación funcionando correctamente"})
})


app.listen(port, ()=>{
    console.log(`Aplicación corriendo en el puerto: ${port}`)
})