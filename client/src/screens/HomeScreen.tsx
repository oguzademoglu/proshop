import { Col, Row } from 'react-bootstrap'
import { Product } from '../types/Product'
import { products } from '../products'
import ProductComp from '../components/ProductComp'

const HomeScreen = () => {
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
