import mongoose, { Schema } from 'mongoose'

const productSchema = new Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
  price: Number,
  categoryId: String,
  countInStock: Number,
  rating: Number,
  numReviews: Number,
})

const Product = mongoose.model('Product', productSchema)
export default Product
