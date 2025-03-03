import express from 'express'
import cors from 'cors'
import 'dotenv/config.js'
import { connect } from 'mongoose'
import connectDB from './configs/mongodb.js'
import { clerkWebhooks } from './controllers/webhooks.js'

const app =express()

//connect to db
await connectDB()

app.use(cors())

//routes
app.get('/',(req,res) => res.send("Api Working"))
app.post('/clerk' , express.json() , clerkWebhooks)

//port
const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Server is runnig ${PORT}`)
})
