import { products } from '../data/products.js'

export const getProducts = (req, res) => {
  try {
    res.json(products)
  } catch (error) {
    console.log(error)
  }
}

export const getProductById = (req, res) => {
  try {
    const product = products.find((p) => p._id === req.params.id)
    res.json(product)
  } catch (error) {
    console.log(error)
  }
}
