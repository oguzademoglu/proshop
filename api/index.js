import express from 'express'
import dotenv from 'dotenv'
import productsRoute from './routes/products.route.js'
import cors from 'cors'

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

app.use('/api/products', productsRoute)

app.listen(port, () => console.log(`server is runnig on port ${port}`))
