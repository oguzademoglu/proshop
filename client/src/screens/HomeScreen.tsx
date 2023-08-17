import { Col, Row } from 'react-bootstrap'
import { Product } from '../types/Product'
// import { products } from '../products'
import ProductComp from '../components/ProductComp'
import { useEffect, useState } from 'react'
import axios from 'axios'

const HomeScreen = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('http://localhost:5000/api/products')
      setProducts(data)
    }
    fetchProducts()
  }, [])
  return (
    <>
      <h3 className="px-4">Latest Products</h3>
      <Row>
        {products.map((product: Product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <ProductComp product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
