import express from 'express'
import productRouter from './src/modules/products/products.routes.js'
import db from './db/dbConnection.js'
import cors from 'cors'
const app = express()
const port = process.env.port || 3000
app.use(express.json())
app.use(cors())
app.use("/products",productRouter)
app.get("/",(req,res)=>{
    res.status(200).json("Welcome to CRUD Management")
})
app.use("*",(req,res)=>{
    res.status(404).send("Not Found")
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))