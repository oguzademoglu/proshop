import express from 'express'
import dotenv from 'dotenv'
import productsRoute from './routes/products.route.js'
import cors from 'cors'
import mongoose from 'mongoose'

const app = express()
app.use(express.json())
dotenv.config()
const port = process.env.PORT || 5000

app.use(
  cors({
    origin: ['http://localhost:5173'],
  })
)

app.get('/', (req, res) => {
  res.send('Api is runnig')
})

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log('mongo connected')
  } catch (error) {
    console.log("can't connet to mongo")
  }
}

app.use('/api/products', productsRoute)

connect()

app.listen(port, () => console.log(`server is runnig on port ${port}`))
